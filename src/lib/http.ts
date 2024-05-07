import ky, { type BeforeRequestHook } from "ky";

const KeycloakHook: BeforeRequestHook = (request) => {
  // Add Keycloak token to the request
  return request;
};

const http = ky.create({
  credentials: "include",
  cache: "no-store",
  redirect: "error",
  throwHttpErrors: true,
});

const rest = http.extend({
  prefixUrl: "http://localhost:8080",
  hooks: {
    beforeRequest: [KeycloakHook],
  },
});

export { http, rest };
