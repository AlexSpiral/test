export const AuthorizationTestData = [
    {
        testCase: 'TEST-1',
        testName: 'Empty email and password',
        positive: false,
        email: '',
        password: '',
        errorMessage: 'Incorrect username or password.'
    },
    {
        testCase: 'TEST-2',
        testName: 'Empty email',
        positive: false,
        email: '',
        password: '123321123',
        errorMessage: 'Incorrect username or password.'
    },
    {
        testCase: 'TEST-3',
        testName: 'Empty password',
        positive: false,
        email: 'example@example.com',
        password: '',
        errorMessage: 'Incorrect username or password.'
    },
    {
        testCase: 'TEST-4',
        testName: 'Non existing email and password',
        positive: false,
        email: 'example@example.com',
        password: 'NonExistingPassword',
        errorMessage: 'Incorrect username or password.'
    },
    {
        testCase: 'TEST-5',
        testName: 'Email with whitespaces',
        positive: false,
        email: 'example @example.com',
        password: 'NonExistingPassword',
        errorMessage: 'Incorrect username or password.'
    },
    {
        testCase: 'TEST-6',
        testName: 'Email with no locator',
        positive: false,
        email: 'example@example',
        password: 'NonExistingPassword',
        errorMessage: 'Incorrect username or password.'
    },
    {
        testCase: 'TEST-7',
        testName: 'Email with symbols',
        positive: false,
        email: 'example+1@example.com',
        password: 'NonExistingPassword',
        errorMessage: 'Incorrect username or password.'
    },
    {
        testCase: 'TEST-8',
        testName: 'Successful login',
        positive: true,
        email: 'example+1@example.com',
        password: 'NonExistingPassword',
    }
];
