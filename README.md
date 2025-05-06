# AI Inferencing powered by Spin & Linode

This repository contains an example application to illustrate how one could perform AI inferencing using different LLMs supported by [Ollama](https://ollama.com/). For the sake of this application, Mistral 7B has been deployed to a Linode with dedicated GPU (NVIDIA RTX 4000 Ada). 

## AI Inferencing Use Case

This application is designed to generate personalized product descriptions to drive sales. By browsing the details page of an article, you can choose from different "potential customers" and ask the AI to generate tailored, personalized product descriptions taking personal information about the customer and their purchasing history into context.

## The Spin Application

The [Spin](https://github.com/fermyon/spin) application consists of two major components (`frontend` and `api`). The `frontend` component serves a [Vue.js](https://vuejs.org/) Single Page Application (SPA) at application root (`/`), which users could use to perform AI inferencing. The `api` component is implemented using TypeScript and exposes the `/api/personalize-with-streaming` and `api/personalize` endpoints, which responds to incoming `POST` requests from the SPA. (Cross Origin requests are not supported as part of this demo).

To compile the application on your machine, you must have the following tools installed:

- [Spin](https://developer.fermyon.com/spin) CLI (version `3.2.0` or later)
- [Node.js](https://nodejs.org) (version `22` or later)

### Compiling the Spin Application

To compile the Spin application, run the `spin build` command from within the root directory of this repository (where `spin.toml`) is located.

```console
spin build
```

### Specify Application Variables

The application has the following variables defined, which must be specified when running the app locally or deploying it to a remote runtime:

| Variable Name | Environment Variable Name | Default Value | Required | Description |
|---------------|---------------------------|---------------|----------|-------------|
| `ollama_base_url` | `SPIN_VARIABLE_OLLAMA_BASE_URL`| none | yes | Ollama API endpoint e.g. `http://1.2.3.4:11434`|
| `ollama_model` | `SPIN_VARIABLE_OLLAMA_MODEL`| `mistral` | yes | Name of the desired model |
| `temperature` | `SPIN_VARIABLE_TEMPERATURE`| `"0.4"` | no | Temperature forwarded to the LLM upon inferencing | 

When running the Spin application on your local machine, you can specify application variables by setting the corresponding environment variables (see table above):

```console
export SPIN_VARIABLE_OLLAMA_BASE_URL="http://1.2.3.4:11434"
export SPIN_VARIABLE_OLLAMA_MODEL="mistral" 

spin up
```

## Direct API invocation

The API endpoints could also be invoked directly, see the following `curl` command:

```console
curl -XPOST -d '{"productDescription":"This is the brand new Smart Speaker 2000 it is amazing","customer":{"firstName":"Sasha","lastName":"Jones","gender":"Male","nationality":"German","age":31,"recentPurchases":"New Outdoor shoes"}}' http://127.0.0.1:3000/api/personalize-with-streaming -i
```