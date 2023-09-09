interface Database<T> {
  checkToken(): Boolean;
}
class DatabaseAccess implements Database<DatabaseAccess> {
  private static accessToken: DatabaseAccess | null = null;
  private constructor() {}
  static getAccessToken(): DatabaseAccess {
    if (!this.accessToken) {
      this.accessToken = new DatabaseAccess();
      return this.accessToken;
    }
    return this.accessToken;
  }
  checkToken(): Boolean {
    return false;
  }
}
export default DatabaseAccess;
