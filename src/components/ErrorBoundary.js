import React from "react"

export default class ErrorBoundary extends React.Component {
    state = { hasError: false };
    static getDerivedStateFromError(error) {
        return { hasError: true };
    }
    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
    }
    render() {
        if (this.state.hasError) {
            return <section style={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}>
                <h1>Something went wrong</h1>
            </section>;
        }
        return this.props.children;
    }  
}