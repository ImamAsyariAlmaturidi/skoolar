import { auth, signIn, signOut } from "../../../../auth";
import ButtonSign from "./ButtonSign";

export default async function UserAvatar() {
  const session = await auth();

  if (!session) {
    return (
      <>
        <h1>You've not login yet bruv</h1>
        <form
          action={async () => {
            "use server";
            await signIn();
          }}
        >
          <button type="submit">Sign In from google</button>
        </form>
      </>
    );
  }

  console.log(session, "<< ini session in classroom/page.jsx");

  return (
    <div>
      {/* <img src={session?.user.image} alt="User Avatar" /> */}
      <ButtonSign></ButtonSign>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button type="submit">Sign Out from google</button>
      </form>
    </div>
  );
}

// {
//   user: {
//     name: 'Fathan',
//     email: 'jundi17fr@gmail.com',
//     image: 'https://lh3.googleusercontent.com/a/ACg8ocJDaQFK07WheslYNcQM0Mg5A0d_07LtMrIJrsIRiFLfy_USsViy=s96-c'
//   },
//   expires: '2024-10-05T07:24:50.144Z'
// } << ini session in classroom/page.jsx
