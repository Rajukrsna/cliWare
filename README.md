# CliWare - Gamified Climate Awareness Application

## Overview
CliWare is a gamified platform designed to raise awareness about environmental sustainability and reduce CO2 footprints. By engaging users in a competitive environment, it promotes eco-friendly actions and provides real-time climate data and statistics for cities worldwide. Users can track their activities, earn points, and share their achievements through social media features.

## Features
- **Activity Tracking**: Users upload their eco-friendly activities and earn points based on their actions.
- **Leaderboard**: A competitive ranking system to encourage users to reduce their CO2 footprint.
- **Climate Data Integration**: Provides real-time climate data and statistics for cities around the world.
- **Social Media Sharing**: Users can post achievements and activities to inspire others.
- **Amazon Rekognition**: Image analysis for verifying eco-friendly activities and awarding points.

## Tech Stack
- **Frontend**: React.js
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Image Recognition**: Amazon Rekognition
- **Climate Data API**: OpenWeather API (or any similar service)
- **Authentication**: Firebase Authentication

## How It Works
1. **User Registration & Login**: Users create an account and log in to the platform.
2. **Activity Upload**: Users upload images or log activities such as walking, cycling, or using public transport.
3. **Points System**: Points are awarded for eco-friendly activities, verified by Amazon Rekognition.
4. **Leaderboard**: Users can see how they rank against others based on their accumulated points.
5. **Climate Data**: Real-time climate statistics are displayed for various cities to raise awareness about local environmental conditions.
6. **Social Sharing**: Users can share their progress and inspire others to take action.

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (locally or via a cloud service like MongoDB Atlas)
- AWS Account for Amazon Rekognition

### Steps to Run Locally
1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/cliware.git
    ```
2. Install dependencies:
    ```bash
    cd cliware
    npm install
    ```
3. Set up environment variables (e.g., AWS credentials, MongoDB URI):
    - Create a `.env` file in the root directory and add the necessary variables.
4. Run the application:
    ```bash
    npm start
    ```

## Challenges
- **Image Recognition**: Integrating Amazon Rekognition to verify user activities was a challenging yet rewarding task.
- **Real-Time Climate Data**: Fetching accurate and up-to-date climate data for cities worldwide required integration with multiple APIs.
- **User Retention**: Keeping users engaged in the long term and making sure the platform remains competitive and rewarding.

## Future Plans
- **Enhance Image Recognition**: Improve the accuracy of activity detection.
- **Expand Activities**: Add more activities and eco-friendly actions to the system.
- **Global Partnerships**: Collaborate with environmental organizations to promote sustainable living.
- **Social Interaction**: Enhance social features for better user engagement and community building.

## Contributing
We welcome contributions to CliWare! If you have ideas or improvements, feel free to fork the repo and submit a pull request. 

1. Fork the repository
2. Create your branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Submit a pull request

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements
- **Amazon Rekognition**: For providing the image recognition technology.
- **OpenWeather API**: For supplying real-time climate data.
- **Node.js & Express**: For building the backend.
- **EJS AND Bootstrap**: For creating the frontend of the application.
