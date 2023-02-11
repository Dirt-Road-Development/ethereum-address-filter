import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import Layout from "./components/Layout";

import varsCSS from "~/styles/vars.css";
import indexCSS from "~/styles/index.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Ethereum Address Filter",
  viewport: "width=device-width,initial-scale=1",
});

export const links = () => [
  { rel: "stylesheet", href: varsCSS },
  { rel: "stylesheet", href: indexCSS }, 
]

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>
          <Outlet />
        </Layout>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
