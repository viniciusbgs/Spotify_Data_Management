Spotify Data Management and Analysis Project
============================================

Introduction
------------

This project is a web application developed using **Next.js**, **Node.js**, **MongoDB**, and **Docker**. Its primary purpose is to manage and visualize data related to Spotify songs. Additionally, the project includes a data analysis component using **Jupyter Spark**. The frontend is styled with Tailwind CSS.

* * * * *

Features
--------

-   **Data Visualization**: View information about songs stored in the MongoDB database.

-   **Data Management**: Perform operations such as deletion using external tools like **MongoDB Compass** and **Mongo Express**.

-   **Data Analysis**: Analyze large-scale data using **Jupyter Spark** to explore correlations and trends in the Spotify dataset.

-   **Docker Integration**: Use Docker and Docker Compose to create an integrated development environment for services like MongoDB, Next.js, and Jupyter Spark.

* * * * *

Technologies Used
-----------------

-   **Frontend**: Next.js (for server-side rendering and static page generation).

-   **Backend**: Node.js.

-   **Database**: MongoDB.

-   **Data Analysis**: Jupyter Spark.

-   **Containerization**: Docker and Docker Compose.

-   **Database Management Tools**: MongoDB Compass, Mongo Express.

* * * * *

How to Run the Project
----------------------

### Prerequisites

-   Docker and Docker Compose installed on your machine.

### Steps

1.  **Clone the repository**:

    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name

2.  **Set up environment variables**:

    -   Create a `.env` file in the root directory based on the `.env.example` template.

    -   Add your credentials (e.g., MongoDB username and password).

3.  **Start the services**:

    ```bash
    docker-compose up

4.  **Access the services**:

    -   **Next.js Application**: Open `http://localhost:3000` in your browser.

    -   **Mongo Express**: Open `http://localhost:8081` to manage the MongoDB database.

    -   **Jupyter Spark**: Access the Jupyter notebook interface at `http://localhost:8888`.

* * * * *

Data Analysis
-------------

The project includes a data analysis component using Jupyter Spark. The analysis focuses on exploring correlations within the Spotify dataset. Key findings include:

-   No strong or highly significant correlations were found in the dataset.

* * * * *

Future Improvements
-------------------

-   Implement additional data management features directly in the web application (e.g., add, update, and delete songs).

-   Enhance the data visualization with interactive charts and filters.

-   Integrate authentication and authorization for secure access to the application.

* * * * *

Conclusion
----------

This project provides a functional framework for managing and visualizing Spotify song data. While the current version focuses on data visualization and analysis, future updates will include more advanced features for data manipulation directly through the web interface. The use of Docker and Docker Compose has streamlined the development process, making it easier to manage and deploy the application.
