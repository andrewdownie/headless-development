# Example usage: sh serveLocalPort 8080

ssh -R 80:localhost:$1 ssh.localhost.run
