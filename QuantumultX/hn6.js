const paths = ["/v3/get_msg"];

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
