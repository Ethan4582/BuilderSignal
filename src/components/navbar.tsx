import React from 'react'

const navbar = () => {
  return (
    <div>
       <div className="fixed left-0 top-0 right-0 z-[10] shrink-[0]" style={{"transform":"perspective(1200px)"}}>
          <div className="contents">

{/* 
            navbar */}
            <nav aria-label="Nav Closed - Desktop" className="items-center flex flex-col justify-start overflow-hidden relative w-full h-[38px] bg-[rgb(20,_20,_20)] gap-[0px] p-[10px]">
              <div aria-label="Top" className="items-center flex h-min justify-center relative w-full gap-[0px] shrink-[0]">
                <div className="items-start flex flex-col grow h-min justify-center overflow-hidden relative w-px basis-0 gap-[10px] shrink-[0]">
                  <a href="https://timaxelsson.com/" className="items-center flex size-min justify-center relative text-[rgb(0,_0,_238)] gap-[10px] shrink-[0]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
                    <div aria-label="Edward Hugo" className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                      <p className="text-center uppercase text-[rgb(242,_242,_242)] text-[15px] leading-[18px]" style={{"fontFamily":"\"Azeret Mono\", monospace","textDecoration":"rgb(242, 242, 242)"}}>TIM AXELSSON</p>
                    </div>
                  </a>
                </div>
                <div className="items-center flex grow h-min justify-center overflow-hidden relative w-px basis-0 gap-[10px] shrink-[0]">
                  <div className="grow relative w-px basis-0 shrink-[0]">
                    <div className="contents">
                      <div aria-label="Navigation Text Flip 2" className="items-center flex h-min justify-center relative w-full gap-[10px]">
                        <div className="items-center flex flex-col justify-center overflow-hidden relative w-min h-[18px] gap-[0px] shrink-[0]">
                          <div aria-label="STYLIST &amp; MAKE UP ARTIST" className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                            <p className="text-center uppercase text-[rgb(242,_242,_242)] text-[15px] leading-[18px]" style={{"fontFamily":"\"Azeret Mono\", monospace","textDecoration":"rgb(242, 242, 242)"}}></p>
                          </div>
                          <div aria-label="STYLIST &amp; MAKE UP ARTIST" className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                            <p className="text-center uppercase text-[rgb(242,_242,_242)] text-[15px] leading-[18px]" style={{"fontFamily":"\"Azeret Mono\", monospace","textDecoration":"rgb(242, 242, 242)"}}>(FOUNDERS TAPES)</p>
                          </div>
                          <div aria-label="STYLIST &amp; MAKE UP ARTIST" className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                            <p className="text-center uppercase text-[rgb(242,_242,_242)] text-[15px] leading-[18px]" style={{"fontFamily":"\"Azeret Mono\", monospace","textDecoration":"rgb(242, 242, 242)"}}>0</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-center flex grow h-min justify-end overflow-hidden relative w-px basis-0 gap-[10px] shrink-[0]">
                  <div aria-label="Menu Button" className="aspect-square relative w-[10px] bg-[rgb(242,_242,_242)] shrink-[0] rounded-[100%]"></div>
                </div>
              </div>
              <div aria-label="Nav Links" className="items-start flex h-min justify-center relative w-full gap-[0px] pt-0 pr-0 pb-10 pl-0 shrink-[0]">
                <div className="items-start flex flex-col grow h-min justify-center relative w-px basis-0 gap-[0px] shrink-[0]">
                  <div aria-label="Links" className="items-center flex h-min justify-center relative w-full gap-[5px] pt-[60px] pr-0 pb-0 pl-0 shrink-[0]">
                    <div className="relative shrink-[0]">
                      <div className="contents">
                        <div aria-label="Offset" className="items-center flex size-min justify-center overflow-hidden relative gap-[10px]">
                          <div className="items-center flex size-min justify-center relative gap-[10px] shrink-[0]">
                            <div className="relative z-[1] shrink-[0] opacity-[0]">
                              <a href="https://www.saascartel.com/" aria-label="Nav Link - Desktop" className="items-center flex h-min justify-center overflow-hidden relative w-[600px] text-[rgb(0,_0,_238)] gap-[4px]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
                                <div className="items-center flex flex-col justify-start relative w-min h-11 gap-[0px] shrink-[0]">
                                  <div aria-label="Text LinK" className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                                    <p className="text-left uppercase text-[rgb(20,_20,_20)] text-[50px] tracking-[-0.5px] leading-[45px]" style={{"fontFamily":"Baskervville, \"Baskervville Placeholder\", serif","textDecoration":"rgb(20, 20, 20)"}}></p>
                                  </div>
                                  <div aria-label="Text LinK" className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                                    <p className="text-left uppercase text-[rgb(20,_20,_20)] text-[52px] tracking-[-0.52px] leading-[46.8px]" style={{"fontFamily":"Fahkwang, \"Fahkwang Placeholder\", sans-serif","textDecoration":"rgb(20, 20, 20)"}}></p>
                                  </div>
                                </div>
                                <div className="relative shrink-[0]">
                                  <div className="contents"></div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div aria-label="Links" className="items-end flex h-min justify-center relative w-full gap-[5px] pt-[7px] pr-0 pb-0 pl-0 shrink-[0]">
                    <div className="relative shrink-[0]">
                      <div className="contents">
                        <div aria-label="Offset" className="items-center flex size-min justify-center overflow-hidden relative gap-[10px]">
                          <div className="items-center flex size-min justify-center relative gap-[10px] shrink-[0]">
                            <div className="relative z-[1] shrink-[0] opacity-[0]">
                              <a href="https://timaxelsson.com/about-me" aria-label="Nav Link - Desktop" className="items-center flex h-min justify-center overflow-hidden relative w-[600px] text-[rgb(0,_0,_238)] gap-[4px]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
                                <div className="items-center flex flex-col justify-start relative w-min h-11 gap-[0px] shrink-[0]">
                                  <div aria-label="Text LinK" className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                                    <p className="text-left uppercase text-[rgb(20,_20,_20)] text-[50px] tracking-[-0.5px] leading-[45px]" style={{"fontFamily":"Baskervville, \"Baskervville Placeholder\", serif","textDecoration":"rgb(20, 20, 20)"}}></p>
                                  </div>
                                  <div aria-label="Text LinK" className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                                    <p className="text-left uppercase text-[rgb(20,_20,_20)] text-[52px] tracking-[-0.52px] leading-[46.8px]" style={{"fontFamily":"Fahkwang, \"Fahkwang Placeholder\", sans-serif","textDecoration":"rgb(20, 20, 20)"}}></p>
                                  </div>
                                </div>
                                <div className="relative shrink-[0]">
                                  <div className="contents"></div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div aria-label="Links" className="items-end flex h-min justify-center relative w-full gap-[5px] pt-[7px] pr-0 pb-0 pl-0 shrink-[0]">
                    <div className="relative shrink-[0]">
                      <div className="contents">
                        <div aria-label="Offset" className="items-center flex size-min justify-center overflow-hidden relative gap-[10px]">
                          <div className="items-center flex size-min justify-center relative gap-[10px] shrink-[0]">
                            <div className="relative z-[1] shrink-[0] opacity-[0]">
                              <a href="https://timaxelsson.com/contact" aria-label="Nav Link - Desktop" className="items-center flex h-min justify-center overflow-hidden relative w-[600px] text-[rgb(0,_0,_238)] gap-[4px]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
                                <div className="items-center flex flex-col justify-start relative w-min h-11 gap-[0px] shrink-[0]">
                                  <div aria-label="Text LinK" className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                                    <p className="text-left uppercase text-[rgb(20,_20,_20)] text-[50px] tracking-[-0.5px] leading-[45px]" style={{"fontFamily":"Baskervville, \"Baskervville Placeholder\", serif","textDecoration":"rgb(20, 20, 20)"}}></p>
                                  </div>
                                  <div aria-label="Text LinK" className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                                    <p className="text-left uppercase text-[rgb(20,_20,_20)] text-[52px] tracking-[-0.52px] leading-[46.8px]" style={{"fontFamily":"Fahkwang, \"Fahkwang Placeholder\", sans-serif","textDecoration":"rgb(20, 20, 20)"}}></p>
                                  </div>
                                </div>
                                <div className="relative shrink-[0]">
                                  <div className="contents"></div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div aria-label="Links" className="items-end flex h-min justify-center relative w-full gap-[5px] pt-[7px] pr-0 pb-0 pl-0 shrink-[0]">
                    <div className="relative shrink-[0]">
                      <div className="contents">
                        <div aria-label="Offset" className="items-center flex size-min justify-center overflow-hidden relative gap-[10px]">
                          <div className="items-center flex size-min justify-center relative gap-[10px] shrink-[0]">
                            <div className="relative z-[1] shrink-[0] opacity-[0]">
                              <a href="https://timaxelsson.com/newsletter" aria-label="Nav Link - Desktop" className="items-center flex h-min justify-center overflow-hidden relative w-[600px] text-[rgb(0,_0,_238)] gap-[4px]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
                                <div className="items-center flex flex-col justify-start relative w-min h-11 gap-[0px] shrink-[0]">
                                  <div aria-label="Text LinK" className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                                    <p className="text-left uppercase text-[rgb(20,_20,_20)] text-[50px] tracking-[-0.5px] leading-[45px]" style={{"fontFamily":"Baskervville, \"Baskervville Placeholder\", serif","textDecoration":"rgb(20, 20, 20)"}}></p>
                                  </div>
                                  <div aria-label="Text LinK" className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                                    <p className="text-left uppercase text-[rgb(20,_20,_20)] text-[52px] tracking-[-0.52px] leading-[46.8px]" style={{"fontFamily":"Fahkwang, \"Fahkwang Placeholder\", sans-serif","textDecoration":"rgb(20, 20, 20)"}}></p>
                                  </div>
                                </div>
                                <div className="relative shrink-[0]">
                                  <div className="contents"></div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>

    </div>
  )
}

export default navbar