import { EndpointFromApiRoot } from "./root"

export const BranchListURL = () => {
    return EndpointFromApiRoot('branches')
}

export const BranchDetailURL = (commit: string) => {
    return EndpointFromApiRoot(`branches/${commit}`)
}