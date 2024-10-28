import http from "@/utils/http";

export function queryProjectConfApi(projectKey) {
  return http.request({
    url: `/form/${projectKey}`,
    method: 'get',
  });
}