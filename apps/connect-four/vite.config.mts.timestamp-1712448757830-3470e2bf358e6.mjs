// apps/connect-four/vite.config.mts
import { defineConfig } from "file:///home/jacobo/repos/generalist/node_modules/vite/dist/node/index.js";
import solidPlugin from "file:///home/jacobo/repos/generalist/node_modules/vite-plugin-solid/dist/esm/index.mjs";
import devtools from "file:///home/jacobo/repos/generalist/node_modules/solid-devtools/dist/vite.js";
import { nxViteTsPaths } from "file:///home/jacobo/repos/generalist/node_modules/@nx/vite/plugins/nx-tsconfig-paths.plugin.js";
var vite_config_default = defineConfig({
  cacheDir: "../../node_modules/.vite/connect-four",
  server: {
    port: 3e3
  },
  build: {
    target: "esnext"
  },
  plugins: [nxViteTsPaths(), devtools(), solidPlugin()],
  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [
  //    viteTsConfigPaths({
  //      root: '../../',
  //    }),
  //  ],
  // },
  test: {
    globals: true,
    cache: {
      dir: "../../node_modules/.vitest"
    },
    environment: "jsdom",
    include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiYXBwcy9jb25uZWN0LWZvdXIvdml0ZS5jb25maWcubXRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvamFjb2JvL3JlcG9zL2dlbmVyYWxpc3QvYXBwcy9jb25uZWN0LWZvdXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL2phY29iby9yZXBvcy9nZW5lcmFsaXN0L2FwcHMvY29ubmVjdC1mb3VyL3ZpdGUuY29uZmlnLm10c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9qYWNvYm8vcmVwb3MvZ2VuZXJhbGlzdC9hcHBzL2Nvbm5lY3QtZm91ci92aXRlLmNvbmZpZy5tdHNcIjsvLy8gPHJlZmVyZW5jZSB0eXBlcz1cInZpdGVzdFwiIC8+XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCBzb2xpZFBsdWdpbiBmcm9tICd2aXRlLXBsdWdpbi1zb2xpZCc7XG5pbXBvcnQgZGV2dG9vbHMgZnJvbSAnc29saWQtZGV2dG9vbHMvdml0ZSc7XG5pbXBvcnQgeyBueFZpdGVUc1BhdGhzIH0gZnJvbSAnQG54L3ZpdGUvcGx1Z2lucy9ueC10c2NvbmZpZy1wYXRocy5wbHVnaW4nO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBjYWNoZURpcjogJy4uLy4uL25vZGVfbW9kdWxlcy8udml0ZS9jb25uZWN0LWZvdXInLFxuXG4gIHNlcnZlcjoge1xuICAgIHBvcnQ6IDMwMDAsXG4gIH0sXG5cbiAgYnVpbGQ6IHtcbiAgICB0YXJnZXQ6ICdlc25leHQnLFxuICB9LFxuXG4gIHBsdWdpbnM6IFtueFZpdGVUc1BhdGhzKCksIGRldnRvb2xzKCksIHNvbGlkUGx1Z2luKCldLFxuXG4gIC8vIFVuY29tbWVudCB0aGlzIGlmIHlvdSBhcmUgdXNpbmcgd29ya2Vycy5cbiAgLy8gd29ya2VyOiB7XG4gIC8vICBwbHVnaW5zOiBbXG4gIC8vICAgIHZpdGVUc0NvbmZpZ1BhdGhzKHtcbiAgLy8gICAgICByb290OiAnLi4vLi4vJyxcbiAgLy8gICAgfSksXG4gIC8vICBdLFxuICAvLyB9LFxuXG4gIHRlc3Q6IHtcbiAgICBnbG9iYWxzOiB0cnVlLFxuICAgIGNhY2hlOiB7XG4gICAgICBkaXI6ICcuLi8uLi9ub2RlX21vZHVsZXMvLnZpdGVzdCcsXG4gICAgfSxcbiAgICBlbnZpcm9ubWVudDogJ2pzZG9tJyxcbiAgICBpbmNsdWRlOiBbJ3NyYy8qKi8qLnt0ZXN0LHNwZWN9LntqcyxtanMsY2pzLHRzLG10cyxjdHMsanN4LHRzeH0nXSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUNBLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8saUJBQWlCO0FBQ3hCLE9BQU8sY0FBYztBQUNyQixTQUFTLHFCQUFxQjtBQUU5QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixVQUFVO0FBQUEsRUFFVixRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBRUEsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLEVBQ1Y7QUFBQSxFQUVBLFNBQVMsQ0FBQyxjQUFjLEdBQUcsU0FBUyxHQUFHLFlBQVksQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVdwRCxNQUFNO0FBQUEsSUFDSixTQUFTO0FBQUEsSUFDVCxPQUFPO0FBQUEsTUFDTCxLQUFLO0FBQUEsSUFDUDtBQUFBLElBQ0EsYUFBYTtBQUFBLElBQ2IsU0FBUyxDQUFDLHNEQUFzRDtBQUFBLEVBQ2xFO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
