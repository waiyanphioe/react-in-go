import esbuild from "esbuild";

esbuild
	.build({
		entryPoints: ["views/main.tsx", "views/style.css"],
		outdir: "public/assets",
		bundle: true,
		minify: true,
	})
	.then(() => console.log("⚡ Build complete! ⚡"))
	.catch(() => process.exit(1));
