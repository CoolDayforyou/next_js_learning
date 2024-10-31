import { redirect } from "next/navigation";
import { comments } from "../data";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  if (parseInt(id) > comments.length) {
    redirect("/comments");
  }
  const comment = comments.find((comm) => comm.id === parseInt(id));

  return Response.json(comment);
}

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const body = await req.json();
  const { text } = body;
  const index = comments.findIndex((comm) => comm.id === parseInt(id));

  comments[index].text = text;

  return Response.json(comments[index]);
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const index = comments.findIndex((comm) => comm.id === parseInt(id));
  const deletedComm = comments[index];
  comments.splice(index, 1);

  return Response.json({ deletedComm, comments });
}
