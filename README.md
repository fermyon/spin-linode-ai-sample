# AI Inferencing with DeepSeek powered by Spin & Linode

This repository contains an example application to illustrate how one could perform AI inferencing using DeepSeek. For the sake of this application, DeepSeek has been deployed to a Linode with dedicated GPU (NVIDIA RTX 4000 Ada). 

Ollama has been deployed to the Linode machine and the latest DeepSeek model (`deepseek-r1:latest`) must be pulled. Additionally, the Ollama server has been exposed for responding to incoming HTTP calls.

## AI Inferencing Use Case

This application is designed to generate personalized product descriptions, given some information about the potential customer and the general product description.

## The Spin Application

The [Spin](https://github.com/fermyon/spin) application consists of two major components (`frontend` and `api`). The `frontend` component serves a simple HTML5 application at application root (`/`), which users could use to perform AI inferencing. The `api` component is implemented using TypeScript and exposes the `/personalize` endpoint, which responds to `POST` requests. 

To compile the application on your machine, you must have the following tools installed:

- [Spin](https://developer.fermyon.com/spin) CLI (version `3.1.0` or later)
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
| `ollama_model` | `SPIN_VARIABLE_OLLAMA_MODEL`| none | yes | Name of the model you want to use e.g. `deepseek-r1:latest` |
| `temperature` | `SPIN_VARIABLE_TEMPERATURE`| `"0.4"` | no | Temperature forwarded to the LLM upon inferencing | 

When running the Spin application on your local machine, you can specify application variables by setting the corresponding environment variables (see table above):

```console
SPIN_VARIABLE_OLLAMA_BASE_URL="http://1.2.3.4:11434" SPIN_VARIABLE_OLLAMA_MODEL="deepseek-r1:latest" spin up
```


## Direct API invocation


The API endpoints could also be invoked directly, see the following `curl` command:

```console
curl -XPOST -d '{"productDescription":"This is the brand new Smart Speaker 2000 it is amazing","customer":{"firstName":"Sasha","lastName":"Jones","gender":"Male","nationality":"German","age":31,"recentPurchases":"New Outdoor shoes"}}' http://127.0.0.1:3000/api/personalize-with-streaming -i
```
```
