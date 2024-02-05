"# Movie-app" 
Movie App
This is a simple web application that allows users to search for movies using the TMDb API. Users can enter a movie title in the search bar and click the "Search" button to retrieve information about the movie.

How to Run the Project Locally
Clone the repository to your local machine:

bash
Copy code
git clone https://github.com/HameedMohammadi/Movie-app.git
Open the project directory in your code editor.

Open the index.html file in your web browser to view the application.

Enter a movie title in the search input field and click the "Search" button to see the search results.

Findings on Performance Improvements
Using asynchronous JavaScript and the Fetch API allows the application to fetch movie data from the TMDb API without blocking the main thread. This improves the user experience by providing a smoother and more responsive interface.

Challenges Faced and Solutions
Handling User Input: One challenge was handling user input validation to ensure that the search field is not empty. This was addressed by checking if the input is empty before making the API request.

Rendering Movie Details: Initially, only the movie title and overview were displayed. We wanted to display additional information such as the movie poster. This was resolved by fetching the poster path from the API and displaying the poster image in the search results.

References/Resources
TMDb API Documentation
