from fastapi import FastAPI, HTTPException, APIRouter
from datetime import datetime, timedelta
from typing import Optional
from pydantic import BaseModel
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException
from bs4 import BeautifulSoup
import uvicorn
from functools import lru_cache

app = FastAPI()

# Path to your Chrome webdriver executable
webdriver_path = "C:/Program Files/Google/Chrome/chromedriver.exe"

class MatchInfo(BaseModel):
    match_time: str
    home_team: str
    away_team: str
    home_score: str
    away_score: str
    status: str
    link: str

@lru_cache(maxsize=None)
def fetch_match_info(date: str):
    try:
        # URL of the webpage you want to scrape
        url = "https://m.sports.naver.com/wfootball/schedule/index?date={}".format(date)
        
        # Initialize Chrome webdriver with service
        service = Service(webdriver_path)
        service.start()
        
        # Headless mode for Chrome options
        chrome_options = Options()
        chrome_options.add_argument("--headless")  # Enable headless mode
        
        # Initialize Chrome WebDriver with options
        driver = webdriver.Chrome(service=service, options=chrome_options)
        
        # Open the webpage
        driver.get(url)
        
        # Wait for the page to load
        wait = WebDriverWait(driver, 10)
        wait.until(EC.presence_of_element_located((By.CLASS_NAME, "ScheduleAllType_match_list_group__1nFDy")))
        
        # Get the page source after waiting for the dynamic content to load
        page_source = driver.page_source
        
        # Use BeautifulSoup to parse the HTML content
        soup = BeautifulSoup(page_source, 'html.parser')
        
        # Find the match item only if league_info is "프리미어리그"
        league_info = soup.find("em", class_="ScheduleAllType_title___Qfd4").text.strip()
        if league_info == "프리미어리그":
            match_list_group = soup.find("div", class_="ScheduleAllType_match_list_group__1nFDy")
            if match_list_group:
                match_items = match_list_group.find_all("li", class_="MatchBox_match_item__3_D0Q")
                
                # Extract information for each match item
                matches = []
                for match in match_items:
                    match_info = {}
                    # Extract match time
                    match_info["match_time"] = match.find("div", class_="MatchBox_time__nIEfd").text.strip()[5:]
        
                    # Extract home team and away team names
                    teams = match.find_all("strong", class_="MatchBoxTeamArea_team__3aB4O")
                    match_info["home_team"] = teams[0].text.strip()
                    match_info["away_team"] = teams[1].text.strip()
        
                    # Extract home score and away score
                    scores = match.find_all("strong", class_="MatchBoxTeamArea_score__1_YFB")
        
                    # Check if scores are available
                    if scores:
                        match_info["home_score"] = scores[0].text.strip()
                        match_info["away_score"] = scores[1].text.strip()
                    else:
                        match_info["home_score"] = "N/A"
                        match_info["away_score"] = "N/A"
        
                    # Extract match status
                    match_info["status"] = match.find("em", class_="MatchBox_status__2pbzi").text.strip()
                    
                    # Extract match link
                    link = match.find("a", class_="MatchBox_link_match_end__3HGjy")
                    match_info["link"] = link["href"] if link and link.has_attr("href") else "none" if link is not None else None

                    # Add match info to matches list
                    matches.append(match_info)
                
                return {"date": date, "league": "프리미어리그", "matches": matches}
            else:
                return {"message": "예정된 경기가 없습니다."}
        else:
            return {"message": "예정된 경기가 없습니다."}
            
    except TimeoutException:
        return {"error": "Timeout occurred while waiting for the element to load"}
        
    finally:
        # Close the webdriver
        if 'driver' in locals():
            driver.quit()

# Define a new APIRouter instance
match_info_router = APIRouter()

# Define routes for each date from January 2, 2024, to May 20, 2024
current_date = datetime(2024, 1, 2)
end_date = datetime(2024, 5, 21)  # end date is exclusive

while current_date < end_date:
    formatted_date = current_date.strftime("%Y-%m-%d")
    @match_info_router.get("/{date}")
    async def get_match_info(date: str = formatted_date):
        match_info_response = fetch_match_info(date)
        if match_info_response:
            return match_info_response
        else:
            raise HTTPException(status_code=404, detail="No scheduled matches found.")
    
    app.include_router(match_info_router, prefix="/match_info")
    
    current_date += timedelta(days=1)

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)