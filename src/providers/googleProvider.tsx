import { GoogleOAuthProvider } from "@react-oauth/google";

 const GooogleProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <GoogleOAuthProvider clientId="477848504442-ui7a5ckaci6nnqr53smpjaukkpet1op0.apps.googleusercontent.com">
      {children}
    </GoogleOAuthProvider>
  );
};

export default GooogleProvider