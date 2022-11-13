# Wondering how to make one for you?

## Wanted the same portfolio that I have made for you? Follow these steps.

1. Go to the [repository](https://github.com/SarathAdhi/Nextjs-X-Notion) and download the ZIP file.

![Screenshot 2022-11-13 081307.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d0f14c70-1730-4407-9678-06e387bc8596/Screenshot_2022-11-13_081307.png)

2. After downloading the file, extract it

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c083b8c4-ec5d-490c-9482-1b0564348b40/Untitled.png)

after extracting, the file structure looks something like this

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fdfd1c75-a4e5-4e49-a93f-7da0b1f881c0/Untitled.png)

3. Open the project in VSCode or your favorite code editor and install the packages by using yarn

![Screenshot 2022-11-13 082245.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/371b9dbd-80a7-4f61-9d1f-965e2ce9d031/Screenshot_2022-11-13_082245.png)

4. After installing the packages or node modules, you can run the development server by

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000/) with your browser to see the result.

5. If you see this, then congrats, 60% of the job is done, remaining 35% is the job to be done in notion

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e9de0335-acae-4e7b-b519-1fb54d998b3c/Untitled.png)

6. Go to my notion template given below and click on the Duplicate button on the top right.

[Resume](https://www.notion.so/Resume-b9a259743fdb4f06b2fd53011631a9f9)

![S.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8e0609c2-082d-444f-a3cc-825fc4caddb3/S.png)

7. Now make the necessary changes and add your information to the notion template.

8. After completing your notion resume, save it and in the top right you will see a share button,

   Click on the share button and and enable **_Share to the web._**

![1.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fcd42405-5fa2-4da6-8c53-03dda1a51b75/1.png)

9. Copy the web link, it looks some thing link this:

https://global-vulture-225.notion.site/Wondering-how-to-make-one-for-you-*41f480b46479475b91e1c8c592410222*

Here we need only the last part of the URL, it looks some thing like this, (_41f480b46479475b91e1c8c592410222)_

Copy the ID and go back to the code editor and open site.config.js file

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9fd4a948-443c-418a-8278-eef8a5d9643b/Untitled.png)

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

  ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/26126349-dae6-4764-beff-57f71363097b/Untitled.png)

- **showNavbar: true**
  ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/84cae9f5-1b5f-4f2f-9f5c-3997cb71a341/Untitled.png)

**showNavbar: false**

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/aafe9b73-307d-4fe5-9bfe-a509cca31d37/Untitled.png)

- **navigationBarTitle: "Hii 👋, I'm Sarath"**
  ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/be6336d1-c44d-44ac-8d31-7ed430214c3f/Untitled.png)
- **_defaultTheme: “dark”_**
  ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/32173c45-eb71-437e-a2a1-123e83eede2f/Untitled.png)
- **_defaultTheme: “light”_**
  ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/aeb5168b-1d47-434c-a996-3306783b6a25/Untitled.png)

## Boom, now save everything, your portfolio is done 🥳🎉

## **Deploy on Vercel**

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
