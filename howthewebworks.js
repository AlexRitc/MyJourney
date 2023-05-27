- What is HTTP?
    
    Hyper Text Transfer Protocol. how clients get data from, or send data to a server.
    
- What is a URL?
    
    Uniform Resource Locator. A URL is an address for some internet resource.
    
- What is DNS?
    
    Domain Name System. This takes human-readable URLs and converts them into IP addresses.
    
- What is a query string?
    
    The query string allows you to pass key value pairs into the URL.
    
- List two HTTP Verbs and their use cases.
    - GET - get some data from the server ,search forms
    - POST - send some data to the server ,changes data on server
- What is an HTTP request?
    
    An HTTP request is a request from a client to a server.
    
- What is an HTTP response?
    
    An HTTP response is a response from a server to a client.
    
- What is an HTTP header? Give a couple examples of request and response headers you have seen.
    - Headers provide additional information about the request or the response.
         - Request headers: Host, User-Agent, Accept, Cookie, Cache-Control
         - Response headers: Content-Type, Last-Modified, Set-Cookie, Cache-Control
- What happens when you type a URL in a browser?
When you enter a website address in your browser, it uses DNS to resolve the name into an IP address. The browser then sends a request to that IP address, including headers with browser information. The server responds with HTML and a status code. The browser constructs a DOM from the HTML and retrieves any additional resources needed, such as images, CSS, or JavaScript, by making separate HTTP requests. The server sends back the requested resources, and the browser incorporates them into the webpage for rendering and functionality.