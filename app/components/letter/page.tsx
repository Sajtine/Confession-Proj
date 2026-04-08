import { motion } from "framer-motion";

export default function LoveLetter({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed inset-0 z-50 bg-gradient-to-br from-rose-50 to-pink-100 overflow-y-auto"
    >
      <div className="min-h-screen flex items-center justify-center p-4 sm:p-6">
        <div className="w-full max-w-lg mx-auto">
          
          {/* The Letter Card */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl p-6 sm:p-10 md:p-12 relative overflow-hidden"
          >
            {/* Decorative top element */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 w-16 h-1 bg-rose-200 rounded-full" />

            <h1 className="text-3xl sm:text-4xl font-semibold text-rose-900 mb-8 text-center tracking-tight">
              Michelle
            </h1>

            <div className="font-serif text-[17px] sm:text-lg leading-relaxed text-rose-950/90 space-y-6">
              <p>
                Hello te. I don't know how to start this but dba we started talking I think last year month of May. And unexpected yung closeness natin, yung chikahan and yung rants like super daldal nating dalawa to the point na pinagchi-chismisan na natin yung ibang buhay ng tao HAHAHAHA. Hindi naman tayo that time nagchichika everyday dba, and the closeness nandyan talaga pag nagchika na us. 
              </p>

              <p>
                I'm going to be honest here with you te, I really enjoyed yung chikahan and yung closeness na nabuild natin sa isa't isa, there's the time nga na namimiss ko yung chikahan natin pero ayaw ko naman na maging isturbo sayo. I know you have other things naman to do. Kaya tamang hintay lang talaga ako sa free time mo. I think andami na nating napagchikahan and ako pa talaga yung madaldal sating dalawa eh. I don't know if nakaka-isturbo ba ako sayo the way yung pinapakita ko na personalities ko. I've been thinking talaga na baka naiinis kana sa mga kadaldalan ko and anything huhu.
              </p>

              <p>
                And te I'm super happy with the bond we've built through our chekass and interactions. Your rants about acads and yung rants ko din about sa council and tasks inside as officer. And yung vibes talaga natin is tilang pinagmatch eh HAHAHAHH. Yapper and the listener yung atake.
              </p>

              <p>
                Pero you know te I'll take this chance and the risk to confess my feelings for you. It started as a simple admiration, but ayun my feelings for you kept growing. Hanggang sa times na namimiss na kita, your energy and lalong lalo na yung tawa mo. I know you have your crush and nakukwento mo sya sakin but I just wanted to express my feelings for you. And if you reject me that's okay this is not to pressure you I know meron kang happy crush, but the main purpose of this was to let you know that's there's someone admiring you genuinely. I know nakataya yung friendship natin sa confession nato but I don't want to be haunted in the future na hindi ko nasabi sayo yung feelings ko. 
              </p>

              <p>
                {/* Your fifth paragraph goes here */}
              </p>
            </div>

            {/* Closing Signature */}
            <div className="mt-10 text-right">
              <p className="font-serif text-rose-800 italic text-lg">
                Justine,
              </p>

            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="mt-12 w-full bg-rose-500 hover:bg-rose-600 active:bg-rose-700 
                         text-white py-3.5 rounded-2xl font-medium text-base 
                         transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Close Letter
            </button>
          </motion.div>

          {/* Optional subtle hint at bottom */}
          <p className="text-center text-rose-400/70 text-xs mt-6 tracking-widest">
            Tap outside or press close to return
          </p>
        </div>
      </div>
    </motion.div>
  );
}