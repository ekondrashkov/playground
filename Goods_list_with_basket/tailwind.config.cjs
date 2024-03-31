module.exports = {
    content: ["./src/**/*.{js,ts,tsx,jsx}", "./build/index.html"],
    plugins: [],
    theme: {
        extend: {
          spacing: {
            "4px": "4px",
          },
          colors: {
            "gray": "rgba(243,244,246)",
            "border-gray": "#e5e7eb",
            "button-gray": "rgba(229,231,235)",
            "button-b-gray": "rgba(209,213,219)",
            "button-red": "rgba(239,68,68)",
            "button-blue": "rgba(59,130,246)",
            "input-border": "rgba(156,163,175)"
          }
        },
      }
}