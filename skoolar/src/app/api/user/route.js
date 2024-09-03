class User {
  static async POST() {
    try {
    } catch (error) {
      return NextResponse.json({
        statusCode: 500,
        message: "Internal server error",
        data: [],
      });
    }
  }
  static async GET() {
    try {
    } catch (error) {
      return NextResponse.json({
        statusCode: 500,
        message: "Internal server error",
        data: [],
      });
    }
  }
  static async PUT() {
    try {
    } catch (error) {
      return NextResponse.json({
        statusCode: 500,
        message: "Internal server error",
        data: [],
      });
    }
  }
  static async DELETE() {
    try {
    } catch (error) {
      return NextResponse.json({
        statusCode: 500,
        message: "Internal server error",
        data: [],
      });
    }
  }
}

export default User;
