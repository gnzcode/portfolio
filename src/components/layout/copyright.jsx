import Container from "./container";

export default function Copyright() {
  return (
    <div className="copyright">
      <Container>
        &copy; Gnzcode {new Date().getFullYear()}. All rights are reserved.
      </Container>
    </div>
  );
}
