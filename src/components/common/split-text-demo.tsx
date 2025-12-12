"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

export default function SplitTextDemo() {
  const charsRef = useRef<HTMLDivElement>(null);
  const [originalText, setOriginalText] = useState<string>("");
  const [splitChars, setSplitChars] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    gsap.registerPlugin(SplitText);

    if (charsRef.current) {
      try {
        const original = charsRef.current.textContent || "";
        setOriginalText(original);
        console.log("Original text:", original);
        console.log("Expected chars:", original.split(""));

        const split = new SplitText(charsRef.current, { type: "chars" });
        console.log("SplitText object:", split);
        console.log("split.chars:", split.chars);

        if (split.chars && Array.isArray(split.chars) && split.chars.length > 0) {
          const chars = split.chars.map((char) => {
            const element = char as HTMLElement;
            return element.textContent || "";
          }).filter(Boolean);
          setSplitChars(chars);
          console.log("Split chars:", chars);

          split.chars.forEach((char) => {
            const element = char as HTMLElement;
            if (element && element.nodeType === 1) {
              element.style.border = "2px solid #ff0000";
              element.style.display = "inline-block";
              element.style.padding = "2px";
              element.style.margin = "1px";
              element.style.backgroundColor = "#ffe0e0";
            }
          });

          const expectedChars = original.split("");
          const matches = chars.length === expectedChars.length && 
                         chars.every((char, i) => char === expectedChars[i]);

          if (!matches) {
            setError(`Mismatch! Expected ${expectedChars.length} chars: [${expectedChars.join(", ")}], Got ${chars.length} chars: [${chars.join(", ")}]`);
            console.error("Mismatch detected:", {
              expected: expectedChars,
              got: chars,
              expectedLength: expectedChars.length,
              gotLength: chars.length
            });
          }
        } else {
          setError(`SplitText failed! split.chars is ${split.chars ? "empty or invalid" : "undefined"}`);
          console.error("No chars found:", split);
        }
      } catch (error) {
        setError(`Error: ${error instanceof Error ? error.message : String(error)}`);
        console.error("SplitText error:", error);
      }
    }
  }, []);

  return (
    <section style={{ padding: "60px 20px", backgroundColor: "#f5f5f5", margin: "40px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{ marginBottom: "40px", textAlign: "center" }}>SplitText Char Test</h2>
        
        <div style={{ marginBottom: "60px", padding: "20px", backgroundColor: "#fff", borderRadius: "8px" }}>
          <h3 style={{ marginBottom: "20px" }}>Test:</h3>
          
          <div style={{ marginBottom: "20px" }}>
            <strong>Original Text (extracted from element):</strong>
            <div style={{ fontSize: "18px", fontFamily: "monospace", padding: "10px", backgroundColor: "#f9f9f9", marginTop: "5px", borderRadius: "4px" }}>
              "{originalText || "Loading..."}"
            </div>
            <div style={{ fontSize: "12px", color: "#666", marginTop: "5px" }}>
              Length: {originalText.length} characters
            </div>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <strong>Split Chars:</strong>
            <div style={{ fontSize: "18px", fontFamily: "monospace", padding: "10px", backgroundColor: "#f9f9f9", marginTop: "5px", borderRadius: "4px" }}>
              [{splitChars.length > 0 ? splitChars.map((char, i) => `"${char}"`).join(", ") : "No chars found"}]
            </div>
            <div style={{ fontSize: "12px", color: "#666", marginTop: "5px" }}>
              Count: {splitChars.length} characters
            </div>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <strong>Visual Result (with borders):</strong>
            <div ref={charsRef} style={{ fontSize: "24px", fontWeight: "bold", marginTop: "10px", minHeight: "40px" }}>
              Hello World test
            </div>
          </div>

          {error && (
            <div style={{ padding: "15px", backgroundColor: "#ffe0e0", border: "2px solid #ff0000", borderRadius: "4px", marginTop: "20px" }}>
              <strong style={{ color: "#aa0000" }}>✗ ERROR:</strong>
              <div style={{ color: "#aa0000", marginTop: "5px", fontFamily: "monospace", fontSize: "14px" }}>
                {error}
              </div>
            </div>
          )}

          {!error && originalText && splitChars.length > 0 && (
            <div style={{ padding: "15px", backgroundColor: "#e0ffe0", border: "2px solid #00aa00", borderRadius: "4px", marginTop: "20px" }}>
              <strong style={{ color: "#00aa00" }}>✓ SUCCESS:</strong>
              <div style={{ color: "#00aa00", marginTop: "5px" }}>
                Original text has {originalText.length} characters, SplitText created {splitChars.length} character elements. They match!
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
