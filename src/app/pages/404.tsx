import React from 'react';
import { NextPage } from 'next';
import Error from 'next/error';

const ErrorPage: NextPage = () => <Error statusCode={404} />;

export default ErrorPage;
