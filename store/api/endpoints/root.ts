/**
 * Get an endpoint from the api root, matching the desired environment.
 * @param endpoint Desired api endpoint
 * @param stage Stage to use for api ('dev', 'staging', 'prod')
 * @returns Complete api endpoint url
 */
export const EndpointFromApiRoot = (endpoint:string, stage = `${process.env.STAGE}`): string => {
    // When a production url is defined simply add it here:
    const PRODUCTION_ROOT = ''
    const DEV_ROOT = 'http://127.0.0.1:8000/'
    // Obtain the base API V1 URL
    const baseUrl = `${stage === 'prod' ? PRODUCTION_ROOT : DEV_ROOT}api/v1/`
    // Join Base URL and desired endpoint and return
    return `${baseUrl}${endpoint}`
}