import "./env"

class ErrorReporter {
    private port: string

    constructor(port: string | undefined) {
      if (port === undefined || port === "") {
        throw new Error("port required")
      }
  
      this.port = port
    }
  
    report(err: Error) {
      // could use apiKey here to send error somewhere
    }
  }
  
  export default new ErrorReporter(process.env.PORT)