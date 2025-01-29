function LogMessage(message: string): void {
    console.log(message);
}

const ArrowLogMessage = (message: string) => console.log(message);
// Removed void return type as TypeScript can infer return type of function
// Cannot remove type of paramteres because we have the strict compiler option turned on

LogMessage('Enjoy the movie!');