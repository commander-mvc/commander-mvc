@Catch(UnauthorizedError)
export class UnauthorizedErrorFilter {
  constructor({ logService }) {
    this.logger = logService
  }

  catch(error) {
    this.logger.error(error)
    console.error("Error unauthorized")
  }
}
