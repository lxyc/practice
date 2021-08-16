echo "Server Running at http://localhost:8080"

goexec 'http.ListenAndServe(`:8080`, http.FileServer(http.Dir(`./src/04-sum`)))'