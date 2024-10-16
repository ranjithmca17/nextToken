// import { mailAction } from "@/app/action/mailAction";
import {mailAction} from "@/app/action/mailAction"

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required." });
    }

    try {
      await mailAction({ email });
      return res.status(200).json({ message: "Email sent successfully." });
    } catch (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ message: "Error sending email." });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed." });
  }
}
