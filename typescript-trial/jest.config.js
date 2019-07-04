module.exports = {
    clearMocks: true,
    moduleFileExtensions: [
        'ts',
        'js'
    ],
    globals: {
        'ts-jest': {
            diagnostics: {
                ignoreCodes: [151001]
            }
        }
    },
    testEnvironment: 'node',
    testMatch: [
        '**/?(*.)test.ts'
    ],
    transform: {
        ts: 'ts-jest'
    }
};
