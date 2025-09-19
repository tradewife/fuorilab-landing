import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

export function WaitlistForm({
  loading,
  onSubmit,
  waitlistSuccess,
  error,
  inputId,
  inputClassName,
  buttonClassName,
  formClassName = "flex flex-col sm:flex-row gap-4 mb-5 max-w-[600px] mx-auto",
  buttonText = "Join the waitlist",
  successMessage = "You're on the list — we'll be in touch before the demo.",
  successClassName = "mt-3 text-base text-green-300 drop-shadow-sm",
  errorClassName = "mt-3 text-base text-red-300 drop-shadow-sm",
  motionProps = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 0.7, duration: 0.8, ease: "easeOut" },
  },
}) {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <motion.form
        {...motionProps}
        onSubmit={onSubmit}
        className={formClassName}
      >
        <label htmlFor={inputId} className="sr-only">
          Email address
        </label>
        <motion.div
          className="relative flex-1"
          animate={{
            scale: isFocused ? 1.02 : 1,
            transition: { duration: 0.2, ease: "easeOut" },
          }}
        >
          <motion.input
            id={inputId}
            name="email"
            type="email"
            placeholder="Enter your best email…"
            required
            disabled={loading}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={inputClassName}
            animate={{
              boxShadow: isFocused
                ? "0 0 0 3px rgba(255, 255, 255, 0.1), 0 10px 25px rgba(0, 0, 0, 0.3)"
                : "0 4px 15px rgba(0, 0, 0, 0.2)",
            }}
            transition={{ duration: 0.2 }}
            aria-describedby={error ? `${inputId}-error` : undefined}
          />
          <AnimatePresence>
            {inputValue && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 bg-green-400 rounded-full"
              />
            )}
          </AnimatePresence>
        </motion.div>

        <motion.button
          whileHover={{
            scale: loading ? 1 : 1.05,
            y: loading ? 0 : -2,
            boxShadow: "0 8px 25px rgba(255, 255, 255, 0.15)",
          }}
          whileTap={{
            scale: loading ? 1 : 0.98,
            transition: { duration: 0.1 },
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          type="submit"
          disabled={loading || !inputValue.trim()}
          className={`${buttonClassName} relative overflow-hidden`}
          aria-label={loading ? "Submitting email" : "Join waitlist"}
        >
          <AnimatePresence mode="wait">
            {loading ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex items-center gap-2"
              >
                <motion.div
                  className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                Joining...
              </motion.div>
            ) : (
              <motion.span
                key="text"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                {buttonText}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.form>

      <AnimatePresence>
        {waitlistSuccess && (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.9 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`${successClassName} flex items-center gap-2 justify-center`}
            role="status"
            aria-live="polite"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 500 }}
              className="w-5 h-5 bg-green-400 rounded-full flex items-center justify-center"
            >
              <motion.svg
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                viewBox="0 0 24 24"
                className="w-3 h-3 text-green-900"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              >
                <path d="M5 12l5 5L20 7" />
              </motion.svg>
            </motion.div>
            {successMessage}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {error && (
          <motion.div
            key="error"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.9 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`${errorClassName} flex items-center gap-2 justify-center`}
            role="alert"
            aria-live="assertive"
            id={`${inputId}-error`}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 500 }}
              className="w-5 h-5 bg-red-400 rounded-full flex items-center justify-center"
            >
              <motion.svg
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                viewBox="0 0 24 24"
                className="w-3 h-3 text-red-900"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </motion.svg>
            </motion.div>
            {error}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
