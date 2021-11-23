import { EndpointFromApiRoot } from "./root"

export const CommitDetailURL = (hexsha: string) => {
    return EndpointFromApiRoot(`commits/${hexsha}`)
}