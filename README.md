# Dev Portfolio

This portfolio is specifically for developers. most developers struggle for choosing color schemes, icons, fonts. so, i thought why not build portfolio for developers.check live preview [here](http://yashrajbasan.com/dev-portfolio)

## features
  * blog
  * content on markdown
  * responsive design
  * modern color scheme
  * social media link
  * SEO
  * optimized 
  * resume download function
  * no need of configuration to download resume
  
## After cloning the repo
   
   * remove the "pathPrefix" from gatsby-config.js. it will create problem in local environment

## How to add projects

  * go to "content" directory
  * go to "projects" directory
  * create new folder with your project name
  * after making folder make create new file with your project name with extension ".md" (markdown)
  * add image in your project folder
  * add metatags in "md" file
    * title - title of the project
    * description - small description of the project
    * link - link if you deployed on internet. (optional)
    * github - link if you deployed on github. (optional)
    * featureImage - image of your project
    * example - 
    ![example](https://raw.githubusercontent.com/yashrajb/dev-portfolio/master/repo/Capture.PNG)
  
## How to add Resume

  * Go to "content" directory and add your resume. make sure your resume in pdf format.
## How to add experience

  * go to "content" directory
  * go to "experience" directory
  * create new markdown file
  * add metatags in "md" file
    * name - name of the company
    * from - date of joining
    * to - currently working or date
    * example - 
  * write content after the separator "---"
    ![example](https://raw.githubusercontent.com/yashrajb/dev-portfolio/master/repo/Capture2.PNG)

## Edit about page

  * go to "content" directory
  * go to "about" directory
  * you will find file name with "about.md"
  * in the "about" directory you can replace the photo
  * in "about" markdown file you will find url of social media and email and image refrence of owner. you can add new url of social media.
    ![example](https://raw.githubusercontent.com/yashrajb/dev-portfolio/master/repo/Capture3.PNG)
    
 NOTE - by default i added only two social media webites icons "gihub","linkedin" and there is one of email. you will find those images in "images" folder which is in "src". if you want other social media then you have to add it.
  
## Write new blog
   * make new folder in "content/posts" directory with your blog title. separate blog title with "-"
   * make new markdown file with your blog title.
   * add metatags in md file
      * title - title of blog - required
      * createdAt - date - required
      * featureImage - feature image of your blog - optional
   * write content after the separator "---"
   ![example](https://raw.githubusercontent.com/yashrajb/dev-portfolio/master/repo/capture4.PNG)
