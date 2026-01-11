#!/bin/bash

echo "╔════════════════════════════════════════════════════════════════╗"
echo "║             STARTING MERLIN WEBSITE SERVER                     ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""
echo "🚀 Starting Python HTTP server..."
echo ""
echo "📍 The website will be available at:"
echo "   http://localhost:8000"
echo ""
echo "💡 To stop the server, press Ctrl+C"
echo ""
echo "═══════════════════════════════════════════════════════════════"
echo ""

python3 -m http.server 8000
