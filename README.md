# Kawal PJJ OSN

**Kawal PJJ OSN** is a website used to track the progress of current-year Indonesian NOI contestants during the Pre-Indonesian-NOI Training. It serves tables of scores for _pemrograman dasar_, and _pemrograman kompetitif dasar_ courses of TLX, and also Indonesian NOI problem set archives of TLX of each current year Indonesian NOI contestants.

## How to deploy this project

To deploy this project, follow these steps

- Replace the content of every variable in `src/utils/constants` with the value corresponding to the current year Indonesian NOI.
- Make sure to have all the environment variables from the `.env.example` file set up in the deployment environment.
- Build and run the project.

## Contributing

This project is written using the [Next.js](https://nextjs.org) framework. To run this project locally for the first time, make sure that you have `Yarn` installed on your system.
You may run these commands to run the development server:

```shell
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

[Material UI](https://mui.com/) is also being used in this project.
