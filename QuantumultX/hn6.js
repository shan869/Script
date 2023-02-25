const paths = ["/flash/accountInit", "/v1/get_user_info"];

if (paths.includes($request.url)) {
  const { body } = $response;
  const modifiedBody = JSON.stringify({
    code: 0,
    message: "SUCCESS",
    result: {
      data: [],
      has_more: 1,
      need_read_flag: true
    }
  });
  $done({ body: modifiedBody });
}
