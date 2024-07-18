const baseUrl = 'https://citytag.yuminstall.top/api/interface';

interface httpParams {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: any;
  headers?: Record<string, string>;
  contentType: 'application/json' | 'multipart/form-data';
}

export const http = async ({ url, method, body, contentType }: httpParams) => {
  const headers: any = {};
  if (contentType !== 'multipart/form-data') {
    headers['Content-Type'] = contentType;
  }

  const response = await fetch(`${baseUrl}/${url}`, {
    method,
    body: contentType === 'multipart/form-data' ? body : JSON.stringify(body),
    headers,
  });

  return response.json();
};
