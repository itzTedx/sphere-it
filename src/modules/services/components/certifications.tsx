import { IconCheckmark } from "@/assets/icons";

import { Media } from "@/modules/cms/components/Media";

interface Props {
	icon?: string;
	title: string;
}
export function Certificate({ icon, title }: Props) {
	return (
		<div className="flex">
			<div className="flex aspect-square items-center justify-center rounded-3xl bg-background p-3">
				{icon ? (
					<div className="relative size-20">
						<Media
							alt="Certificate"
							className="object-contain"
							fill
							src={icon}
						/>
					</div>
				) : (
					<span className="flex size-20 items-center justify-center text-center font-display font-medium text-sm leading-tight">
						{icon}
					</span>
				)}
			</div>
			<CertificateTitle title={title} />
		</div>
	);
}

export function CertificateTitle({ title }: { title: string }) {
	return (
		<div className="flex items-center gap-2 px-1 py-2">
			<IconCheckmark className="size-3.5 shrink-0" />
			<h4 className="text-balance">{title}</h4>
		</div>
	);
}
