"use server";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
          scope:
            "openid profile email https://www.googleapis.com/auth/classroom.courses https://www.googleapis.com/auth/classroom.coursework.me https://www.googleapis.com/auth/classroom.coursework.students",
          // [
          //   "openid profile email https://www.googleapis.com/auth/classroom.courses",
          //   "https://www.googleapis.com/auth/classroom.coursework.me",
          // ],
        },
      },
    }),
  ],
  callbacks: {
    // async signIn({account, profile}) {
    // console.log(objSignin, "<< ini objSignin sebelum di destruct di signIn");
    // console.log(account, "account signin");
    // console.log(profile, "profile signin");
    // },
    //
    //
    //

    async jwt({ token, account }) {
      // console.log(objToken, "<< objToken di jwt");
      // console.log(token, "ini token");
      // console.log(account, "ini account");

      if (account) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
      }
      return token;
    },
    async session({ token, session }) {
      //   console.log(obj, "<< ini obj sebelum di destruc di session");

      // console.log(token, "token in session");
      // console.log(session, "session in session");

      session.accessToken = token.accessToken;
      session.refreshToken = token.refreshToken;
      return session;
    },
  },
});

// {
//   user: {
//     id: '0d4b4559-7ee5-4a0c-9cca-ac979e495a73',
//     name: 'Fathan',
//     email: 'jundi17fr@gmail.com',
//     image: 'https://lh3.googleusercontent.com/a/ACg8ocJDaQFK07WheslYNcQM0Mg5A0d_07LtMrIJrsIRiFLfy_USsViy=s96-c'
//   },
//   account: {
//     access_token: 'ya29.a0AcM612yvlAS7XB4EEW0pneD67bw-LhLyezZe4MiUAPewIpDKrOO2ICZB093Uv0IPtUrR7RszcDhPtMgDyjqD-jPivjhzc_Cdkxvm6qSAIkgU4MUrm29bYAAfA8RVavgXzN25Veus43EAzKCprIiH6hFJlPp0d8THvuD66r53aCgYKAQYSARASFQHGX2MijOLyKpAwN3v3boQTCz786A0175',
//     expires_in: 3599,
//     refresh_token: '1//0gR9MlmN0MNVsCgYIARAAGBASNwF-L9IrVMXXAiDHZoXnIvycg6QoqLV19DgVvfpikVrzFy4ltU1s4Klc2mxqUWvIClcfKIRjdp0',
//     scope: 'https://www.googleapis.com/auth/userinfo.profile openid https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/classroom.courses',
//     token_type: 'bearer',
//     id_token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImIyZjgwYzYzNDYwMGVkMTMwNzIxMDFhOGI0MjIwNDQzNDMzZGIyODIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI5NjQwODM5NzM0MTItdDgwdjljY3ZidjI3cGEwMG41bDhyZzhhZGxxbjVqbnIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI5NjQwODM5NzM0MTItdDgwdjljY3ZidjI3cGEwMG41bDhyZzhhZGxxbjVqbnIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTgxMzQ1MDAxNjc5OTEyMzUxNTYiLCJlbWFpbCI6Imp1bmRpMTdmckBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6InZaZkNpM05FQmstbXZVS013ZEphaGciLCJuYW1lIjoiRmF0aGFuIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0pEYVFGSzA3V2hlc2xZTmNRTTBNZzVBMGRfMDdMdE1ySUpyc0lSaUZMZnlfVVNzVml5PXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6IkZhdGhhbiIsImlhdCI6MTcyNTU3NTgwOCwiZXhwIjoxNzI1NTc5NDA4fQ.ZcG-64xIY9N-nE-oT34Wzei_DdLM-KuFMWMIxnENuejo0vsSLUOSQ19leBiYEoUloNbF9GqYhnRDVcCP0_DtBGLPImavxEcQmN5N-QYuGlArrNr02X8-0gb6Wc-p763UeAMeCUwFg0MumJ5UpLZB9cSExCHIOskOHxpTWbrIS-5S3MCcTDTTyDpi6vX_hrJzCkmIkAcLvfwNw-aJLF47b9D39raqf5GxzNpLSs1NjHB0qhz_dFWMJKJ-2hSp9kUxFGG2spbo4AzNTHSCPDS0nt9YDqaWpGPNQCHnAjdLZxUXlJTGYsgIOAKzChuVib3BGvy30pxeGKVImGN6m8wpSg',
//     expires_at: 1725579407,
//     provider: 'google',
//     type: 'oidc',
//     providerAccountId: '118134500167991235156'
//   },
//   profile: {
//     iss: 'https://accounts.google.com',
//     azp: '964083973412-t80v9ccvbv27pa00n5l8rg8adlqn5jnr.apps.googleusercontent.com',
//     aud: '964083973412-t80v9ccvbv27pa00n5l8rg8adlqn5jnr.apps.googleusercontent.com',
//     sub: '118134500167991235156',
//     email: 'jundi17fr@gmail.com',
//     email_verified: true,
//     at_hash: 'vZfCi3NEBk-mvUKMwdJahg',
//     name: 'Fathan',
//     picture: 'https://lh3.googleusercontent.com/a/ACg8ocJDaQFK07WheslYNcQM0Mg5A0d_07LtMrIJrsIRiFLfy_USsViy=s96-c',
//     given_name: 'Fathan',
//     iat: 1725575808,
//     exp: 1725579408
//   }
// } << ini objSignin sebelum di destruct di signIn
//
//
//
// {
//   session: {
//     user: {
//       name: 'Fathan',
//       email: 'jundi17fr@gmail.com',
//       image: 'https://lh3.googleusercontent.com/a/ACg8ocJDaQFK07WheslYNcQM0Mg5A0d_07LtMrIJrsIRiFLfy_USsViy=s96-c'
//     },
//     expires: '2024-10-05T22:11:39.565Z'
//   },
//   token: {
//     name: 'Fathan',
//     email: 'jundi17fr@gmail.com',
//     picture: 'https://lh3.googleusercontent.com/a/ACg8ocJDaQFK07WheslYNcQM0Mg5A0d_07LtMrIJrsIRiFLfy_USsViy=s96-c',
//     sub: 'f248f943-0e04-4184-bb09-3ef9af5f4f23',
//     iat: 1725574261,
//     exp: 1728166261,
//     jti: '64eaae50-0d60-4e3d-a0e1-f182dcc44b55'
//   }
// } << ini obj sebelum di destruc di session
//
//
//
// {
//   token: {
//     name: 'Fathan',
//     email: 'jundi17fr@gmail.com',
//     picture: 'https://lh3.googleusercontent.com/a/ACg8ocJDaQFK07WheslYNcQM0Mg5A0d_07LtMrIJrsIRiFLfy_USsViy=s96-c',
//     sub: '5101010d-606a-41f4-819a-220e55d4aec3'
//   },
//   user: {
//     id: '5101010d-606a-41f4-819a-220e55d4aec3',
//     name: 'Fathan',
//     email: 'jundi17fr@gmail.com',
//     image: 'https://lh3.googleusercontent.com/a/ACg8ocJDaQFK07WheslYNcQM0Mg5A0d_07LtMrIJrsIRiFLfy_USsViy=s96-c'
//   },
//   account: {
//     access_token: 'ya29.a0AcM612xZR34HYJklNM8DSAvRvDU_BvVcLP5BqMO6B_n1PYM_Y1GRW2WfC8dSZmvnbzR_QX68TURnkqnfzrcbWbm3a0SIoJeIW8hf9OajKNp-O_qperOFJaE6ALQ53hGVibzOhTZI_b3tk8_W3hSpT4VrPc1u-XPhLHVW9OOUaCgYKATISARASFQHGX2MizBhZHg-6ejXaz00xL78ppg0175',
//     expires_in: 3599,
//     refresh_token: '1//0gFGby2bCJK7-CgYIARAAGBASNwF-L9Ir61zIjzVGWptse6qwnPg8J5gASUquUdjiQ12wsGr3LYTEMu1h8yW10s2f6amtY6iehyI',
//     scope: 'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile openid https://www.googleapis.com/auth/classroom.courses',
//     token_type: 'bearer',
//     id_token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImIyZjgwYzYzNDYwMGVkMTMwNzIxMDFhOGI0MjIwNDQzNDMzZGIyODIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI5NjQwODM5NzM0MTItdDgwdjljY3ZidjI3cGEwMG41bDhyZzhhZGxxbjVqbnIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI5NjQwODM5NzM0MTItdDgwdjljY3ZidjI3cGEwMG41bDhyZzhhZGxxbjVqbnIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTgxMzQ1MDAxNjc5OTEyMzUxNTYiLCJlbWFpbCI6Imp1bmRpMTdmckBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6ImV1RFhJcXN0bHlVNWhNZm1oT2hzbXciLCJuYW1lIjoiRmF0aGFuIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0pEYVFGSzA3V2hlc2xZTmNRTTBNZzVBMGRfMDdMdE1ySUpyc0lSaUZMZnlfVVNzVml5PXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6IkZhdGhhbiIsImlhdCI6MTcyNTU3NTk2MywiZXhwIjoxNzI1NTc5NTYzfQ.hZfzs_5xJhxyfQfiBzKTV0AGG-TW2kM2raJiNRlBApdlB74gCrNqr3BcAN6p7YaYXvK5Yul9rpUdD-P2G2j-PBwCf6uAV98xIPx_hoKTxmQhUN1-1-3wWPkL7HDmUIXuW0PAw9mot7RQp0wlHnw1ASTSzQxEGs504mkZEqjPncImD4qm05_yYj84R-BL5BEpzA-KY_i80dsR7ILp79ML0cC8a_OJ9GA6FmwMAbSmASKbsMxS5UcIm5UlAzqsX5ZvA9Lcy0hz_vq_Apr0FDRwIHDw-1Xu_7tp__PzIStPL_fYCsXad72lJbZDAAoJpJkjzHwuad73c7YrYaFt7WPckQ',
//     expires_at: 1725579562,
//     provider: 'google',
//     type: 'oidc',
//     providerAccountId: '118134500167991235156'
//   },
//   profile: {
//     iss: 'https://accounts.google.com',
//     azp: '964083973412-t80v9ccvbv27pa00n5l8rg8adlqn5jnr.apps.googleusercontent.com',
//     aud: '964083973412-t80v9ccvbv27pa00n5l8rg8adlqn5jnr.apps.googleusercontent.com',
//     sub: '118134500167991235156',
//     email: 'jundi17fr@gmail.com',
//     email_verified: true,
//     at_hash: 'euDXIqstlyU5hMfmhOhsmw',
//     name: 'Fathan',
//     picture: 'https://lh3.googleusercontent.com/a/ACg8ocJDaQFK07WheslYNcQM0Mg5A0d_07LtMrIJrsIRiFLfy_USsViy=s96-c',
//     given_name: 'Fathan',
//     iat: 1725575963,
//     exp: 1725579563
//   },
//   isNewUser: undefined,
//   trigger: 'signIn'
// } << objToken di jwt

/*
{
  access_token: 'ya29.a0AcM612yECUejE2rNaZjApFeLA5AQRR3FBOIFTIJjH4d7lIxTfYE9JD5WBd0mBrVTy5fAnxwUcIOfzDKJiZkpRWs3gSSQTjMssB7tYyhGnIN0RoQtjtuc6FFbwjsk_lWna2gjZQx0IrMQB04IYkfO_xv6KYPElEli3ODwLSRiaCgYKAe8SARASFQHGX2Mi-_0lG-2OxoVLH3rV1QorLg0175',
  expires_in: 3599,
  refresh_token: '1//0gpY0c2JdZMfACgYIARAAGBASNwF-L9IrowkzJHBZAD4bw5r3_IGjtNXZXI0I3JujYlel1JLtaHq6LdnTyAnN47y_c4ST5TW2UaY',
  scope: 'https://www.googleapis.com/auth/classroom.courses https://www.googleapis.com/auth/userinfo.email openid https://www.googleapis.com/auth/userinfo.profile',      
  token_type: 'bearer',
  id_token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImIyZjgwYzYzNDYwMGVkMTMwNzIxMDFhOGI0MjIwNDQzNDMzZGIyODIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI5NjQwODM5NzM0MTItdDgwdjljY3ZidjI3cGEwMG41bDhyZzhhZGxxbjVqbnIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI5NjQwODM5NzM0MTItdDgwdjljY3ZidjI3cGEwMG41bDhyZzhhZGxxbjVqbnIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTgxMzQ1MDAxNjc5OTEyMzUxNTYiLCJlbWFpbCI6Imp1bmRpMTdmckBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6IjI2cVlPS3JvRzVEcVFmdVV4OVNZQkEiLCJuYW1lIjoiRmF0aGFuIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0pEYVFGSzA3V2hlc2xZTmNRTTBNZzVBMGRfMDdMdE1ySUpyc0lSaUZMZnlfVVNzVml5PXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6IkZhdGhhbiIsImlhdCI6MTcyNTQ4NjAxOCwiZXhwIjoxNzI1NDg5NjE4fQ.QoB_ErqgygCwI791y-jUutErJpg6omhUwzXNs2JNVxCQHCsGelYf2wvdNnetflpwHdaKnt2pIVxTMdKY15pRRa-BxYeyuvFzJGxclDj4dMPk14vh1kvjEwPOcGOE9EbovH_SRcBgrr2yrXDIfCuS6pYphzCzwY6VWXfwG06HBIZyZBcPNlFL2RrBV0mPQW4yzSo0gKtFhpmx4pKyHV1-kjjJsdnyKk0KxubvlP6xm248jqy0QwIFsNFhU-_-ZXzN9-M0gCds0B4CJ2HJl99QjFSMfQQN5R0c8bGTv8EMyGzLswZ195ISmsRD4G2lHU7Znkhsx_y8-Qu6sTahuNucjw',
  expires_at: 1725489618,
  provider: 'google',
  type: 'oidc',
  providerAccountId: '118134500167991235156'
} account signin
{
  iss: 'https://accounts.google.com',
  azp: '964083973412-t80v9ccvbv27pa00n5l8rg8adlqn5jnr.apps.googleusercontent.com',   
  aud: '964083973412-t80v9ccvbv27pa00n5l8rg8adlqn5jnr.apps.googleusercontent.com',   
  sub: '118134500167991235156',
  email: 'jundi17fr@gmail.com',
  email_verified: true,
  at_hash: '26qYOKroG5DqQfuUx9SYBA',
  name: 'Fathan',
  picture: 'https://lh3.googleusercontent.com/a/ACg8ocJDaQFK07WheslYNcQM0Mg5A0d_07LtMrIJrsIRiFLfy_USsViy=s96-c',
  given_name: 'Fathan',
  iat: 1725486018,
  exp: 1725489618
} profile signin
 */
