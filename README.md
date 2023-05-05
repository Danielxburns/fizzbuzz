# fizzbuzz

A classic coding interview question

Write a program that prints the numbers from 1 to 100.   
If it’s a multiple of 3, it should print “Fizz”.   
If it’s a multiple of 5, it should print “Buzz”.   
If it’s a multiple of 3 and 5, it should print “FizzBuzz”.  

## Objective 

Create a single container Docker image deployed to AWS that serves up single page app

## Screenshot

![Screenshot from 2023-05-03 18-34-39 resized](https://user-images.githubusercontent.com/41316262/236073862-857cd78b-a736-4941-b05a-7a272a071e49.png)

# Requirements

DockerHub acct [https://hub.docker.com/signup](https://hub.docker.com/signup)
Docker Desktop [https://docs.docker.com/get-docker/](https://docs.docker.com/get-docker/)
 - This is a multi step process that may take some time to get through depending on your system. Read the documentation and be patient.
 - It will install the Docker CLI, Docker Compose, and Kubernetes as well as some other useful packages  
 - Launch Docker Desktop with ```systemctl --user start docker-desktop``` or click on it in your Applications menu.
 - Log in to DockerHub to push and pull images ```docker login```  enter username and password

## run the front end app in a docker container locally developement mode 
 navigate to the client folder in your terminal

 ```docker build -f Dockerfile.dev -t front-end .```
builds an image from file (-f) Dockerfile.dev and tags it (-t) with the name 'front-end' from the pwd (.)

```docker run -p 3000:3000 front-end```
runs the container and maps the container's port 3000 to your local port 3000
view the app in your browser by going to localhost:3000

## start server in developer mode
 navigate to the the server folder in your terminal  

 ```
 docker build -f Dockerfile.dev -t dev-server .
 ```
 ```
 docker run -p 8080:8080 dev-server
 ``` 
