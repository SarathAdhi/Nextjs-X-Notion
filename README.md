# Wondering how to make one for you?

## Wanted the same portfolio that I have made for you? Follow these steps.

1. Go to the [repository](https://github.com/SarathAdhi/Nextjs-X-Notion) and download the ZIP file.

![image](https://user-images.githubusercontent.com/91727830/201504670-b10c287d-bac1-4449-826e-6d32a393841f.png)


2. After downloading the file, extract it

![image](https://user-images.githubusercontent.com/91727830/201504685-8fb8a683-edc8-4b3b-8fd8-a4ef368f70dc.png)

after extracting, the file structure looks something like this

![image](https://user-images.githubusercontent.com/91727830/201504700-94772bc6-7a0c-4498-8b7a-a3a7fff562e1.png)

3. Open the project in VSCode or your favorite code editor and install the packages by using yarn

![image](https://user-images.githubusercontent.com/91727830/201504708-24bbf3ee-47ab-4216-9e6c-b9fba3f1110f.png)


4. After installing the packages or node modules, you can run the development server by

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000/) with your browser to see the result.

5. If you see this, then congrats, 60% of the job is done, remaining 35% is the job to be done in notion

![image](https://user-images.githubusercontent.com/91727830/201504726-f1bbe5b1-7256-4d31-8de2-0c32c3d8aa50.png)

6. Go to my notion template given below and click on the Duplicate button on the top right.

[Resume](https://www.notion.so/Resume-b9a259743fdb4f06b2fd53011631a9f9)

![image](https://user-images.githubusercontent.com/91727830/201504738-363111a0-a708-4d97-b58f-ff19b4bcd28e.png)

7. Now make the necessary changes and add your information to the notion template.

8. After completing your notion resume, save it and in the top right you will see a share button,

   Click on the share button and and enable **_Share to the web._**

![image](https://user-images.githubusercontent.com/91727830/201504745-6ce45dc3-3596-44da-ab3f-b59e79eafa9d.png)

9. Copy the web link, it looks some thing link this:

https://global-vulture-225.notion.site/Wondering-how-to-make-one-for-you-*41f480b46479475b91e1c8c592410222*

Here we need only the last part of the URL, it looks some thing like this, (_41f480b46479475b91e1c8c592410222)_

Copy the ID and go back to the code editor and open site.config.js file

![image](https://user-images.githubusercontent.com/91727830/201504756-e258957a-f0d7-4b5b-bef1-f00981599f95.png)

10. Edit the config file.

```
module.exports = {
	notionPageId: "b9a259743fdb4f06b2fd53011631a9f9",
  title: "Sarath Portfolio",
  showNavbar: true,
  navigationBarTitle: "Hii 👋, I'm Sarath",
  defaultTheme: "dark", // "dark" or "light"
};
```

- **notionPageId: "<your-id>"** **_(See step 9)_**

- **title: Sarath Portfolio**

  ![image](https://user-images.githubusercontent.com/91727830/201504768-f0b93c94-81c8-45d2-8916-6e4bbf53fb17.png)

- **showNavbar: true**

  ![image](https://user-images.githubusercontent.com/91727830/201504781-69418b68-01e5-4158-95b9-d3a13496c8d6.png)

**showNavbar: false**

  ![image](https://user-images.githubusercontent.com/91727830/201504793-ecf6bdbf-b1fa-47c1-9b49-78f160c5033b.png)


- **navigationBarTitle: "Hii 👋, I'm Sarath"**
  ![image](https://user-images.githubusercontent.com/91727830/201504806-836243a0-bf37-4aa4-af34-7cabb5e7525f.png)

  
- **_defaultTheme: “dark”_**
  ![image](https://user-images.githubusercontent.com/91727830/201504815-fbba1587-53ba-4e39-8650-c52204f5f33c.png)

  
- **_defaultTheme: “light”_**
  ![image](https://user-images.githubusercontent.com/91727830/201504822-f2243c8d-bd80-4990-b175-4eaa5a048389.png)


## Boom, now save everything, your portfolio is done 🥳🎉

## **Deploy on Vercel**

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
