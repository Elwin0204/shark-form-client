import http from "@/utils/http";

// 获取表单配置
export function queryFormConfApi(formKey) {
  return http.request({
    url: `/form/${formKey}`,
    method: "get",
  });
}

// 新增保存表单子项
export function saveFormItemApi(data) {
  return http.request({
    url: "/form/item/create",
    method: "post",
    data: data,
  });
}

// 获取表单子项排序
export function queryFormItemSortApi(data) {
  return http.request({
    url: "/form/item/sort",
    method: "post",
    data: data,
  });
}

// 删除表单子项
export function deleteFormItemApi(data) {
  return http.request({
    url: "/form/item/delete",
    method: "post",
    data: data,
  });
}
