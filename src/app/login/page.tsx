import { LoginForm } from "@/ui/login-form";
import Image from "next/image";

export default function LoginPage() {
	return (
		<div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-neutral-50 p-6 md:p-10">
			<div className="flex w-full max-w-sm flex-col gap-6">
				<a href="#" className="flex items-center gap-2 self-center font-medium">
					<Image src="/s2y_logo_dark.png" alt="S2Y Logo" width={60} height={16} className="dark:hidden" />
					<Image
						src="/s2y_logo_light.png"
						alt="S2Y Logo"
						width={60}
						height={16}
						className="hidden dark:block"
					/>
				</a>
				<LoginForm />
			</div>
		</div>
	);
}
