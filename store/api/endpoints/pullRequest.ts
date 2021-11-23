import { EndpointFromApiRoot } from "./root"

/**
 * This endpoint is used with a GET request to get the list of all pull requests, 
 * and also with a POST request to create new pull requests.
 * @returns usable uri for request
 */
export const PullRequestListURL = () => {
  return EndpointFromApiRoot(`pull_requests/`)
}

/**
 * This endpoint is used with a PATCH request to partially update a pull request, 
 * and also with a PUT request to update all fields of a pull requests.
 * @param id Id of the pull request to modify.
 * @returns 
 */
export const PullRequestDetailURL = (id: number) => {
    return EndpointFromApiRoot(`pull_requests/${id}/`)
}