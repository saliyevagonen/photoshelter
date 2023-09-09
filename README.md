## <span style="color: lightblue;">🚀 Automation Instructions</span>


 This repository contains automated tests for [the-internet.herokuapp](the-internet.herokuapp.com).

## <span style="color: lightblue;">Table of Contents</span>

- 📋 [Prerequisites](#prerequisites)
- 🛠️ [Installation](#installation)
- 🔧 [Configuration](#configuration)
- ▶️  [Running Tests](#running-tests)
- 📊 [Viewing Test Results](#viewing-test-results)
- ❓ [Why WebDriverIO](#why-webdriverio)
- 📞 [Contact](#contact)


## <span style="color: lightblue;">Prerequisites</span>

Before you begin, ensure you have the following installed:
-    IDE: You can use any Integrated Development Environment (IDE) of your choice. If you don't have one, you can download and install Visual Studio Code from [Here](https://code.visualstudio.com/download)
- ⚙️ Node.js and npm: Download and install Node.js and npm (Node Package Manager) from [Here](https://nodejs.org/)
- 📦 Git: Download and install Git from [Here](https://git-scm.com/)


## <span style="color: lightblue;">Installation</span>

1. **<span style="color: lightblue;">Clone the Repository</span>**



      Clone this repository to your local machine using the following command:

    ```
    git@github.com:saliyevagonen/photoshelter.git
    ```

## <span style="color: lightblue;">Configuration</span>
1. **<span style="color: lightblue;">Navigate to the cloned repository on your local machine:</span>**

    ```
    cd photoshelter-sarmaya-gonen
2. **<span style="color: lightblue;">Install the necessary dependencies using npm:</span>**
    ```
    npm install
## <span style="color: lightblue;">Running Tests</span>

3. **<span style="color: lightblue;">To run the automated tests, execute the following command in your Terminal</span>**
    ```
    npm test:headed
    npm test:headless  //if you want to run headless
 ## <span style="color: lightblue;">Viewing Test Results</span>

After running the automated tests, you can generate and view detailed test reports using Allure. Follow these steps to generate and view the Allure reports:

1. **<span style="color: lightblue;">Generate Allure Reports:</span>**

   After running the tests, the results will be stored in the `allure-results` directory. To generate Allure reports from these results, execute the following command in your Terminal:
   ```
   allure generate ./allure-results --clean -o ./allure-report
2. **<span style="color: lightblue;">View Allure Reports:</span>**

    Once the reports are generated, you can view them in a user-friendly format using the Allure command. Execute the following command in your Terminal:
    ```
    allure:open