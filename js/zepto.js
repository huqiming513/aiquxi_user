var Zepto = function() {
    function f(b) {
        return null == b ? String(b) : O[U.call(b)] || "object"
    }

    function h(b) {
        return "function" == f(b)
    }

    function n(b) {
        return null != b && b == b.window
    }

    function p(b) {
        return null != b && b.nodeType == b.DOCUMENT_NODE
    }

    function v(b) {
        return "object" == f(b)
    }

    function t(b) {
        return v(b) && !n(b) && Object.getPrototypeOf(b) == Object.prototype
    }

    function F(b) {
        return "number" == typeof b.length
    }

    function A(b) {
        return c.call(b, function(b) {
            return null != b
        })
    }

    function D(b) {
        return b.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g,
            "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
    }

    function G(b) {
        return b in L ? L[b] : L[b] = new RegExp("(^|\\s)" + b + "(\\s|$)")
    }

    function B(b, a) {
        return "number" != typeof a || V[D(b)] ? a : a + "px"
    }

    function C(b) {
        return "children" in b ? a.call(b.children) : g.map(b.childNodes, function(b) {
            if (1 == b.nodeType) return b
        })
    }

    function E(b, a, I) {
        for (k in a) I && (t(a[k]) || J(a[k])) ? (t(a[k]) && !t(b[k]) && (b[k] = {}), J(a[k]) && !J(b[k]) && (b[k] = []), E(b[k], a[k], I)) : a[k] !== l && (b[k] = a[k])
    }

    function z(b, a) {
        return null == a ?
            g(b) : g(b).filter(a)
    }

    function w(b, a, I, c) {
        return h(a) ? a.call(b, I, c) : a
    }

    function x(b, a) {
        var c = b.className,
            e = c && c.baseVal !== l;
        if (a === l) return e ? c.baseVal : c;
        e ? c.baseVal = a : b.className = a
    }

    function u(b) {
        var a;
        try {
            return b ? "true" == b || ("false" == b ? !1 : "null" == b ? null : /^0/.test(b) || isNaN(a = Number(b)) ? /^[\[\{]/.test(b) ? g.parseJSON(b) : b : a) : b
        } catch (c) {
            return b
        }
    }

    function H(b, a) {
        a(b);
        for (var c = 0, e = b.childNodes.length; c < e; c++) H(b.childNodes[c], a)
    }
    var l, k, g, q, d = [],
        a = d.slice,
        c = d.filter,
        e = window.document,
        y = {},
        L = {},
        V = {
            "column-count": 1,
            columns: 1,
            "font-weight": 1,
            "line-height": 1,
            opacity: 1,
            "z-index": 1,
            zoom: 1
        },
        m = /^\s*<(\w+|!)[^>]*>/,
        K = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        W = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
        Q = /^(?:body|html)$/i,
        X = /([A-Z])/g,
        Y = "val css html text data width height offset".split(" "),
        P = e.createElement("table"),
        R = e.createElement("tr"),
        S = {
            tr: e.createElement("tbody"),
            tbody: P,
            thead: P,
            tfoot: P,
            td: R,
            th: R,
            "*": e.createElement("div")
        },
        Z = /complete|loaded|interactive/,
        aa = /^[\w-]*$/,
        O = {},
        U = O.toString,
        r = {},
        M, N, T = e.createElement("div"),
        ba = {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        J = Array.isArray || function(b) {
            return b instanceof Array
        };
    r.matches = function(b, a) {
        if (!a || !b || 1 !== b.nodeType) return !1;
        var c = b.webkitMatchesSelector || b.mozMatchesSelector || b.oMatchesSelector || b.matchesSelector;
        if (c) return c.call(b, a);
        var e;
        e = b.parentNode;
        (c = !e) && (e = T).appendChild(b);
        e = ~r.qsa(e, a).indexOf(b);
        c && T.removeChild(b);
        return e
    };
    M = function(b) {
        return b.replace(/-+(.)?/g, function(b, a) {
            return a ? a.toUpperCase() : ""
        })
    };
    N = function(b) {
        return c.call(b, function(a, c) {
            return b.indexOf(a) == c
        })
    };
    r.fragment = function(b, c, I) {
        var d, f, y;
        K.test(b) && (d = g(e.createElement(RegExp.$1)));
        d || (b.replace && (b = b.replace(W, "<$1></$2>")), c === l && (c = m.test(b) && RegExp.$1), c in S || (c = "*"), y = S[c], y.innerHTML = "" + b, d = g.each(a.call(y.childNodes),
            function() {
                y.removeChild(this)
            }));
        t(I) && (f = g(d), g.each(I, function(b, a) {
            if (-1 < Y.indexOf(b)) f[b](a);
            else f.attr(b, a)
        }));
        return d
    };
    r.Z = function(b, a) {
        b = b || [];
        b.__proto__ = g.fn;
        b.selector = a || "";
        return b
    };
    r.isZ = function(b) {
        return b instanceof r.Z
    };
    r.init = function(b, a) {
        var c;
        if (b)
            if ("string" == typeof b)
                if (b = b.trim(), "<" == b[0] && m.test(b)) c = r.fragment(b, RegExp.$1, a), b = null;
                else {
                    if (a !== l) return g(a).find(b);
                    c = r.qsa(e, b)
                }
        else {
            if (h(b)) return g(e).ready(b);
            if (r.isZ(b)) return b;
            if (J(b)) c = A(b);
            else if (v(b)) c = [b],
                b = null;
            else if (m.test(b)) c = r.fragment(b.trim(), RegExp.$1, a), b = null;
            else {
                if (a !== l) return g(a).find(b);
                c = r.qsa(e, b)
            }
        } else return r.Z();
        return r.Z(c, b)
    };
    g = function(b, a) {
        return r.init(b, a)
    };
    g.extend = function(b) {
        var c, e = a.call(arguments, 1);
        "boolean" == typeof b && (c = b, b = e.shift());
        e.forEach(function(a) {
            E(b, a, c)
        });
        return b
    };
    r.qsa = function(b, c) {
        var e, d = "#" == c[0],
            f = !d && "." == c[0],
            g = d || f ? c.slice(1) : c,
            y = aa.test(g);
        return p(b) && y && d ? (e = b.getElementById(g)) ? [e] : [] : 1 !== b.nodeType && 9 !== b.nodeType ? [] : a.call(y && !d ? f ?
            b.getElementsByClassName(g) : b.getElementsByTagName(c) : b.querySelectorAll(c))
    };
    g.contains = e.documentElement.contains ? function(b, a) {
        return b !== a && b.contains(a)
    } : function(b, a) {
        for (; a && (a = a.parentNode);)
            if (a === b) return !0;
        return !1
    };
    g.type = f;
    g.isFunction = h;
    g.isWindow = n;
    g.isArray = J;
    g.isPlainObject = t;
    g.isEmptyObject = function(b) {
        for (var a in b) return !1;
        return !0
    };
    g.inArray = function(b, a, c) {
        return d.indexOf.call(a, b, c)
    };
    g.camelCase = M;
    g.trim = function(b) {
        return null == b ? "" : String.prototype.trim.call(b)
    };
    g.uuid =
        0;
    g.support = {};
    g.expr = {};
    g.map = function(b, a) {
        var c, e = [],
            d;
        if (F(b))
            for (d = 0; d < b.length; d++) c = a(b[d], d), null != c && e.push(c);
        else
            for (d in b) c = a(b[d], d), null != c && e.push(c);
        return 0 < e.length ? g.fn.concat.apply([], e) : e
    };
    g.each = function(b, a) {
        var c;
        if (F(b))
            for (c = 0; c < b.length && !1 !== a.call(b[c], c, b[c]); c++);
        else
            for (c in b)
                if (!1 === a.call(b[c], c, b[c])) break; return b
    };
    g.grep = function(b, a) {
        return c.call(b, a)
    };
    window.JSON && (g.parseJSON = JSON.parse);
    g.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
        function(b, a) {
            O["[object " + a + "]"] = a.toLowerCase()
        });
    g.fn = {
        forEach: d.forEach,
        reduce: d.reduce,
        push: d.push,
        sort: d.sort,
        indexOf: d.indexOf,
        concat: d.concat,
        map: function(b) {
            return g(g.map(this, function(a, c) {
                return b.call(a, c, a)
            }))
        },
        slice: function() {
            return g(a.apply(this, arguments))
        },
        ready: function(b) {
            Z.test(e.readyState) && e.body ? b(g) : e.addEventListener("DOMContentLoaded", function() {
                b(g)
            }, !1);
            return this
        },
        get: function(b) {
            return b === l ? a.call(this) : this[0 <= b ? b : b + this.length]
        },
        toArray: function() {
            return this.get()
        },
        size: function() {
            return this.length
        },
        remove: function() {
            return this.each(function() {
                null != this.parentNode && this.parentNode.removeChild(this)
            })
        },
        each: function(b) {
            d.every.call(this, function(a, c) {
                return !1 !== b.call(a, c, a)
            });
            return this
        },
        filter: function(b) {
            return h(b) ? this.not(this.not(b)) : g(c.call(this, function(a) {
                return r.matches(a, b)
            }))
        },
        add: function(b, a) {
            return g(N(this.concat(g(b, a))))
        },
        is: function(b) {
            return 0 < this.length && r.matches(this[0], b)
        },
        not: function(b) {
            var c = [];
            if (h(b) && b.call !== l) this.each(function(a) {
                b.call(this,
                    a) || c.push(this)
            });
            else {
                var e = "string" == typeof b ? this.filter(b) : F(b) && h(b.item) ? a.call(b) : g(b);
                this.forEach(function(b) {
                    0 > e.indexOf(b) && c.push(b)
                })
            }
            return g(c)
        },
        has: function(b) {
            return this.filter(function() {
                return v(b) ? g.contains(this, b) : g(this).find(b).size()
            })
        },
        eq: function(b) {
            return -1 === b ? this.slice(b) : this.slice(b, +b + 1)
        },
        first: function() {
            var b = this[0];
            return b && !v(b) ? b : g(b)
        },
        last: function() {
            var b = this[this.length - 1];
            return b && !v(b) ? b : g(b)
        },
        find: function(b) {
            var a = this;
            return b ? "object" == typeof b ?
                g(b).filter(function() {
                    var b = this;
                    return d.some.call(a, function(a) {
                        return g.contains(a, b)
                    })
                }) : 1 == this.length ? g(r.qsa(this[0], b)) : this.map(function() {
                    return r.qsa(this, b)
                }) : []
        },
        closest: function(b, a) {
            var c = this[0],
                e = !1;
            for ("object" == typeof b && (e = g(b)); c && !(e ? 0 <= e.indexOf(c) : r.matches(c, b));) c = c !== a && !p(c) && c.parentNode;
            return g(c)
        },
        parents: function(b) {
            for (var a = [], c = this; 0 < c.length;) c = g.map(c, function(b) {
                if ((b = b.parentNode) && !p(b) && 0 > a.indexOf(b)) return a.push(b), b
            });
            return z(a, b)
        },
        parent: function(b) {
            return z(N(this.pluck("parentNode")),
                b)
        },
        children: function(b) {
            return z(this.map(function() {
                return C(this)
            }), b)
        },
        contents: function() {
            return this.map(function() {
                return a.call(this.childNodes)
            })
        },
        siblings: function(b) {
            return z(this.map(function(b, a) {
                return c.call(C(a.parentNode), function(b) {
                    return b !== a
                })
            }), b)
        },
        empty: function() {
            return this.each(function() {
                this.innerHTML = ""
            })
        },
        pluck: function(b) {
            return g.map(this, function(a) {
                return a[b]
            })
        },
        show: function() {
            return this.each(function() {
                "none" == this.style.display && (this.style.display = "");
                if ("none" ==
                    getComputedStyle(this, "").getPropertyValue("display")) {
                    var b = this.style,
                        a = this.nodeName,
                        c, d;
                    y[a] || (c = e.createElement(a), e.body.appendChild(c), d = getComputedStyle(c, "").getPropertyValue("display"), c.parentNode.removeChild(c), "none" == d && (d = "block"), y[a] = d);
                    b.display = y[a]
                }
            })
        },
        replaceWith: function(b) {
            return this.before(b).remove()
        },
        wrap: function(b) {
            var a = h(b);
            if (this[0] && !a) var c = g(b).get(0),
                e = c.parentNode || 1 < this.length;
            return this.each(function(d) {
                g(this).wrapAll(a ? b.call(this, d) : e ? c.cloneNode(!0) : c)
            })
        },
        wrapAll: function(b) {
            if (this[0]) {
                g(this[0]).before(b = g(b));
                for (var a;
                    (a = b.children()).length;) b = a.first();
                g(b).append(this)
            }
            return this
        },
        wrapInner: function(b) {
            var a = h(b);
            return this.each(function(c) {
                var e = g(this),
                    d = e.contents();
                c = a ? b.call(this, c) : b;
                d.length ? d.wrapAll(c) : e.append(c)
            })
        },
        unwrap: function() {
            this.parent().each(function() {
                g(this).replaceWith(g(this).children())
            });
            return this
        },
        clone: function() {
            return this.map(function() {
                return this.cloneNode(!0)
            })
        },
        hide: function() {
            return this.css("display",
                "none")
        },
        toggle: function(b) {
            return this.each(function() {
                var a = g(this);
                (b === l ? "none" == a.css("display") : b) ? a.show(): a.hide()
            })
        },
        prev: function(b) {
            return g(this.pluck("previousElementSibling")).filter(b || "*")
        },
        next: function(b) {
            return g(this.pluck("nextElementSibling")).filter(b || "*")
        },
        html: function(b) {
            return 0 in arguments ? this.each(function(a) {
                var c = this.innerHTML;
                g(this).empty().append(w(this, b, a, c))
            }) : 0 in this ? this[0].innerHTML : null
        },
        text: function(b) {
            return 0 in arguments ? this.each(function(a) {
                a =
                    w(this, b, a, this.textContent);
                this.textContent = null == a ? "" : "" + a
            }) : 0 in this ? this[0].textContent : null
        },
        attr: function(b, a) {
            var c;
            return "string" != typeof b || 1 in arguments ? this.each(function(c) {
                if (1 === this.nodeType)
                    if (v(b))
                        for (k in b) {
                            var e = k;
                            c = b[k];
                            null == c ? this.removeAttribute(e) : this.setAttribute(e, c)
                        } else e = b, c = w(this, a, c, this.getAttribute(b)), null == c ? this.removeAttribute(e) : this.setAttribute(e, c)
            }) : this.length && 1 === this[0].nodeType ? !(c = this[0].getAttribute(b)) && b in this[0] ? this[0][b] : c : l
        },
        removeAttr: function(b) {
            return this.each(function() {
                1 ===
                    this.nodeType && this.removeAttribute(b)
            })
        },
        prop: function(b, a) {
            b = ba[b] || b;
            return 1 in arguments ? this.each(function(c) {
                this[b] = w(this, a, c, this[b])
            }) : this[0] && this[0][b]
        },
        data: function(b, a) {
            var c = "data-" + b.replace(X, "-$1").toLowerCase(),
                c = 1 in arguments ? this.attr(c, a) : this.attr(c);
            return null !== c ? u(c) : l
        },
        val: function(b) {
            return 0 in arguments ? this.each(function(a) {
                this.value = w(this, b, a, this.value)
            }) : this[0] && (this[0].multiple ? g(this[0]).find("option").filter(function() {
                    return this.selected
                }).pluck("value") :
                this[0].value)
        },
        offset: function(b) {
            if (b) return this.each(function(a) {
                var c = g(this);
                a = w(this, b, a, c.offset());
                var e = c.offsetParent().offset();
                a = {
                    top: a.top - e.top,
                    left: a.left - e.left
                };
                "static" == c.css("position") && (a.position = "relative");
                c.css(a)
            });
            if (!this.length) return null;
            var a = this[0].getBoundingClientRect();
            return {
                left: a.left + window.pageXOffset,
                top: a.top + window.pageYOffset,
                width: Math.round(a.width),
                height: Math.round(a.height)
            }
        },
        css: function(b, a) {
            if (2 > arguments.length) {
                var c = this[0],
                    e = getComputedStyle(c,
                        "");
                if (!c) return;
                if ("string" == typeof b) return c.style[M(b)] || e.getPropertyValue(b);
                if (J(b)) {
                    var d = {};
                    g.each(J(b) ? b : [b], function(b, a) {
                        d[a] = c.style[M(a)] || e.getPropertyValue(a)
                    });
                    return d
                }
            }
            var y = "";
            if ("string" == f(b)) a || 0 === a ? y = D(b) + ":" + B(b, a) : this.each(function() {
                this.style.removeProperty(D(b))
            });
            else
                for (k in b) b[k] || 0 === b[k] ? y += D(k) + ":" + B(k, b[k]) + ";" : this.each(function() {
                    this.style.removeProperty(D(k))
                });
            return this.each(function() {
                this.style.cssText += ";" + y
            })
        },
        index: function(b) {
            return b ? this.indexOf(g(b)[0]) :
                this.parent().children().indexOf(this[0])
        },
        hasClass: function(b) {
            return b ? d.some.call(this, function(b) {
                return this.test(x(b))
            }, G(b)) : !1
        },
        addClass: function(b) {
            return b ? this.each(function(a) {
                q = [];
                var c = x(this);
                w(this, b, a, c).split(/\s+/g).forEach(function(b) {
                    g(this).hasClass(b) || q.push(b)
                }, this);
                q.length && x(this, c + (c ? " " : "") + q.join(" "))
            }) : this
        },
        removeClass: function(b) {
            return this.each(function(a) {
                if (b === l) return x(this, "");
                q = x(this);
                w(this, b, a, q).split(/\s+/g).forEach(function(b) {
                    q = q.replace(G(b), " ")
                });
                x(this, q.trim())
            })
        },
        toggleClass: function(b, a) {
            return b ? this.each(function(c) {
                var e = g(this);
                w(this, b, c, x(this)).split(/\s+/g).forEach(function(b) {
                    (a === l ? !e.hasClass(b) : a) ? e.addClass(b): e.removeClass(b)
                })
            }) : this
        },
        scrollTop: function(b) {
            if (this.length) {
                var a = "scrollTop" in this[0];
                return b === l ? a ? this[0].scrollTop : this[0].pageYOffset : this.each(a ? function() {
                    this.scrollTop = b
                } : function() {
                    this.scrollTo(this.scrollX, b)
                })
            }
        },
        scrollLeft: function(b) {
            if (this.length) {
                var a = "scrollLeft" in this[0];
                return b === l ? a ? this[0].scrollLeft :
                    this[0].pageXOffset : this.each(a ? function() {
                        this.scrollLeft = b
                    } : function() {
                        this.scrollTo(b, this.scrollY)
                    })
            }
        },
        position: function() {
            if (this.length) {
                var b = this[0],
                    a = this.offsetParent(),
                    c = this.offset(),
                    e = Q.test(a[0].nodeName) ? {
                        top: 0,
                        left: 0
                    } : a.offset();
                c.top -= parseFloat(g(b).css("margin-top")) || 0;
                c.left -= parseFloat(g(b).css("margin-left")) || 0;
                e.top += parseFloat(g(a[0]).css("border-top-width")) || 0;
                e.left += parseFloat(g(a[0]).css("border-left-width")) || 0;
                return {
                    top: c.top - e.top,
                    left: c.left - e.left
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a =
                        this.offsetParent || e.body; a && !Q.test(a.nodeName) && "static" == g(a).css("position");) a = a.offsetParent;
                return a
            })
        }
    };
    g.fn.detach = g.fn.remove;
    ["width", "height"].forEach(function(a) {
        var c = a.replace(/./, function(a) {
            return a[0].toUpperCase()
        });
        g.fn[a] = function(e) {
            var d, f = this[0];
            return e === l ? n(f) ? f["inner" + c] : p(f) ? f.documentElement["scroll" + c] : (d = this.offset()) && d[a] : this.each(function(c) {
                f = g(this);
                f.css(a, w(this, e, c, f[a]()))
            })
        }
    });
    ["after", "prepend", "before", "append"].forEach(function(a, c) {
        var d = c % 2;
        g.fn[a] =
            function() {
                var a, b = g.map(arguments, function(b) {
                        a = f(b);
                        return "object" == a || "array" == a || null == b ? b : r.fragment(b)
                    }),
                    y, m = 1 < this.length;
                return 1 > b.length ? this : this.each(function(a, f) {
                    y = d ? f : f.parentNode;
                    f = 0 == c ? f.nextSibling : 1 == c ? f.firstChild : 2 == c ? f : null;
                    var L = g.contains(e.documentElement, y);
                    b.forEach(function(a) {
                        if (m) a = a.cloneNode(!0);
                        else if (!y) return g(a).remove();
                        y.insertBefore(a, f);
                        L && H(a, function(a) {
                            null == a.nodeName || "SCRIPT" !== a.nodeName.toUpperCase() || a.type && "text/javascript" !== a.type || a.src || window.eval.call(window,
                                a.innerHTML)
                        })
                    })
                })
            };
        g.fn[d ? a + "To" : "insert" + (c ? "Before" : "After")] = function(c) {
            g(c)[a](this);
            return this
        }
    });
    r.Z.prototype = g.fn;
    r.uniq = N;
    r.deserializeValue = u;
    g.zepto = r;
    return g
}();
window.Zepto = Zepto;
void 0 === window.$ && (window.$ = Zepto);
(function(f) {
    function h(a) {
        return a._zid || (a._zid = G++)
    }

    function n(a, c, e, d) {
        c = p(c);
        if (c.ns) var f = new RegExp("(?:^| )" + c.ns.replace(" ", " .* ?") + "(?: |$)");
        return (w[h(a)] || []).filter(function(a) {
            return a && (!c.e || a.e == c.e) && (!c.ns || f.test(a.ns)) && (!e || h(a.fn) === h(e)) && (!d || a.sel == d)
        })
    }

    function p(a) {
        a = ("" + a).split(".");
        return {
            e: a[0],
            ns: a.slice(1).sort().join(" ")
        }
    }

    function v(a) {
        return l[a] || u && H[a] || a
    }

    function t(a, c, e, d, g, k, m) {
        var K = h(a),
            n = w[K] || (w[K] = []);
        c.split(/\s/).forEach(function(c) {
            if ("ready" ==
                c) return f(document).ready(e);
            var h = p(c);
            h.fn = e;
            h.sel = g;
            h.e in l && (e = function(a) {
                var c = a.relatedTarget;
                if (!c || c !== this && !f.contains(this, c)) return h.fn.apply(this, arguments)
            });
            var K = (h.del = k) || e;
            h.proxy = function(c) {
                c = A(c);
                if (!c.isImmediatePropagationStopped()) {
                    c.data = d;
                    var e = K.apply(a, c._args == B ? [c] : [c].concat(c._args));
                    !1 === e && (c.preventDefault(), c.stopPropagation());
                    return e
                }
            };
            h.i = n.length;
            n.push(h);
            "addEventListener" in a && a.addEventListener(v(h.e), h.proxy, h.del && !u && h.e in H || !!m)
        })
    }

    function F(a,
        c, e, d, f) {
        var g = h(a);
        (c || "").split(/\s/).forEach(function(c) {
            n(a, c, e, d).forEach(function(c) {
                delete w[g][c.i];
                "removeEventListener" in a && a.removeEventListener(v(c.e), c.proxy, c.del && !u && c.e in H || !!f)
            })
        })
    }

    function A(a, c) {
        if (c || !a.isDefaultPrevented)
            if (c || (c = a), f.each(d, function(e, d) {
                    var f = c[e];
                    a[e] = function() {
                        this[d] = k;
                        return f && f.apply(c, arguments)
                    };
                    a[d] = g
                }), c.defaultPrevented !== B ? c.defaultPrevented : "returnValue" in c ? !1 === c.returnValue : c.getPreventDefault && c.getPreventDefault()) a.isDefaultPrevented =
                k;
        return a
    }

    function D(a) {
        var c, e = {
            originalEvent: a
        };
        for (c in a) q.test(c) || a[c] === B || (e[c] = a[c]);
        return A(e, a)
    }
    var G = 1,
        B, C = Array.prototype.slice,
        E = f.isFunction,
        z = function(a) {
            return "string" == typeof a
        },
        w = {},
        x = {},
        u = "onfocusin" in window,
        H = {
            focus: "focusin",
            blur: "focusout"
        },
        l = {
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        };
    x.click = x.mousedown = x.mouseup = x.mousemove = "MouseEvents";
    f.event = {
        add: t,
        remove: F
    };
    f.proxy = function(a, c) {
        var e = 2 in arguments && C.call(arguments, 2);
        if (E(a)) {
            var d = function() {
                return a.apply(c,
                    e ? e.concat(C.call(arguments)) : arguments)
            };
            d._zid = h(a);
            return d
        }
        if (z(c)) return e ? (e.unshift(a[c], a), f.proxy.apply(null, e)) : f.proxy(a[c], a);
        throw new TypeError("expected function");
    };
    f.fn.bind = function(a, c, e) {
        return this.on(a, c, e)
    };
    f.fn.unbind = function(a, c) {
        return this.off(a, c)
    };
    f.fn.one = function(a, c, e, d) {
        return this.on(a, c, e, d, 1)
    };
    var k = function() {
            return !0
        },
        g = function() {
            return !1
        },
        q = /^([A-Z]|returnValue$|layer[XY]$)/,
        d = {
            preventDefault: "isDefaultPrevented",
            stopImmediatePropagation: "isImmediatePropagationStopped",
            stopPropagation: "isPropagationStopped"
        };
    f.fn.delegate = function(a, c, e) {
        return this.on(c, a, e)
    };
    f.fn.undelegate = function(a, c, e) {
        return this.off(c, a, e)
    };
    f.fn.live = function(a, c) {
        f(document.body).delegate(this.selector, a, c);
        return this
    };
    f.fn.die = function(a, c) {
        f(document.body).undelegate(this.selector, a, c);
        return this
    };
    f.fn.on = function(a, c, e, d, h) {
        var l, m, k = this;
        if (a && !z(a)) return f.each(a, function(a, d) {
            k.on(a, c, e, d, h)
        }), k;
        z(c) || E(d) || !1 === d || (d = e, e = c, c = B);
        if (E(e) || !1 === e) d = e, e = B;
        !1 === d && (d = g);
        return k.each(function(g,
            k) {
            h && (l = function(a) {
                F(k, a.type, d);
                return d.apply(this, arguments)
            });
            c && (m = function(a) {
                var e, g = f(a.target).closest(c, k).get(0);
                if (g && g !== k) return e = f.extend(D(a), {
                    currentTarget: g,
                    liveFired: k
                }), (l || d).apply(g, [e].concat(C.call(arguments, 1)))
            });
            t(k, a, d, e, c, m || l)
        })
    };
    f.fn.off = function(a, c, e) {
        var d = this;
        if (a && !z(a)) return f.each(a, function(a, e) {
            d.off(a, c, e)
        }), d;
        z(c) || E(e) || !1 === e || (e = c, c = B);
        !1 === e && (e = g);
        return d.each(function() {
            F(this, a, e, c)
        })
    };
    f.fn.trigger = function(a, c) {
        a = z(a) || f.isPlainObject(a) ? f.Event(a) :
            A(a);
        a._args = c;
        return this.each(function() {
            "dispatchEvent" in this ? this.dispatchEvent(a) : f(this).triggerHandler(a, c)
        })
    };
    f.fn.triggerHandler = function(a, c) {
        var e, d;
        this.each(function(g, h) {
            e = D(z(a) ? f.Event(a) : a);
            e._args = c;
            e.target = h;
            f.each(n(h, a.type || a), function(a, c) {
                d = c.proxy(e);
                if (e.isImmediatePropagationStopped()) return !1
            })
        });
        return d
    };
    "focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(a) {
        f.fn[a] =
            function(c) {
                return c ? this.bind(a, c) : this.trigger(a)
            }
    });
    ["focus", "blur"].forEach(function(a) {
        f.fn[a] = function(c) {
            c ? this.bind(a, c) : this.each(function() {
                try {
                    this[a]()
                } catch (c) {}
            });
            return this
        }
    });
    f.Event = function(a, c) {
        z(a) || (c = a, a = c.type);
        var e = document.createEvent(x[a] || "Events"),
            d = !0;
        if (c)
            for (var f in c) "bubbles" == f ? d = !!c[f] : e[f] = c[f];
        e.initEvent(a, d, !0);
        return A(e)
    }
})(Zepto);
(function(f) {
    function h(d, a, c, e) {
        if (d.global) return d = a || w, c = f.Event(c), f(d).trigger(c, e), !c.isDefaultPrevented()
    }

    function n(d) {
        d.global && 0 === f.active++ && h(d, null, "ajaxStart")
    }

    function p(d, a) {
        var c = a.context;
        if (!1 === a.beforeSend.call(c, d, a) || !1 === h(a, c, "ajaxBeforeSend", [d, a])) return !1;
        h(a, c, "ajaxSend", [d, a])
    }

    function v(d, a, c, e) {
        var f = c.context;
        c.success.call(f, d, "success", a);
        e && e.resolveWith(f, [d, "success", a]);
        h(c, f, "ajaxSuccess", [a, c, d]);
        F("success", a, c)
    }

    function t(d, a, c, e, f) {
        var g = e.context;
        e.error.call(g,
            c, a, d);
        f && f.rejectWith(g, [c, a, d]);
        h(e, g, "ajaxError", [c, e, d || a]);
        F(a, c, e)
    }

    function F(d, a, c) {
        var e = c.context;
        c.complete.call(e, a, d);
        h(c, e, "ajaxComplete", [a, c]);
        c.global && !--f.active && h(c, null, "ajaxStop")
    }

    function A() {}

    function D(d) {
        d && (d = d.split(";", 2)[0]);
        return d && ("text/html" == d ? "html" : "application/json" == d ? "json" : l.test(d) ? "script" : k.test(d) && "xml") || "text"
    }

    function G(d, a) {
        return "" == a ? d : (d + "&" + a).replace(/[&?]{1,2}/, "?")
    }

    function B(d) {
        d.processData && d.data && "string" != f.type(d.data) && (d.data = f.param(d.data,
            d.traditional));
        !d.data || d.type && "GET" != d.type.toUpperCase() || (d.url = G(d.url, d.data), d.data = void 0)
    }

    function C(d, a, c, e) {
        f.isFunction(a) && (e = c, c = a, a = void 0);
        f.isFunction(c) || (e = c, c = void 0);
        return {
            url: d,
            data: a,
            success: c,
            dataType: e
        }
    }

    function E(d, a, c, e) {
        var g, h = f.isArray(a),
            l = f.isPlainObject(a);
        f.each(a, function(a, k) {
            g = f.type(k);
            e && (a = c ? e : e + "[" + (l || "object" == g || "array" == g ? a : "") + "]");
            !e && h ? d.add(k.name, k.value) : "array" == g || !c && "object" == g ? E(d, k, c, a) : d.add(a, k)
        })
    }
    var z = 0,
        w = window.document,
        x, u, H = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        l = /^(?:text|application)\/javascript/i,
        k = /^(?:text|application)\/xml/i,
        g = /^\s*$/;
    f.active = 0;
    f.ajaxJSONP = function(d, a) {
        if (!("type" in d)) return f.ajax(d);
        var c = d.jsonpCallback,
            e = (f.isFunction(c) ? c() : c) || "jsonp" + ++z,
            g = w.createElement("script"),
            h = window[e],
            k, l = function(a) {
                f(g).triggerHandler("error", a || "abort")
            },
            n = {
                abort: l
            },
            q;
        a && a.promise(n);
        f(g).on("load error", function(c, l) {
            clearTimeout(q);
            f(g).off().remove();
            "error" != c.type && k ? v(k[0], n, d, a) : t(null, l || "error", n, d, a);
            window[e] = h;
            k && f.isFunction(h) &&
                h(k[0]);
            h = k = void 0
        });
        if (!1 === p(n, d)) return l("abort"), n;
        window[e] = function() {
            k = arguments
        };
        g.src = d.url.replace(/\?(.+)=\?/, "?$1=" + e);
        w.head.appendChild(g);
        0 < d.timeout && (q = setTimeout(function() {
            l("timeout")
        }, d.timeout));
        return n
    };
    f.ajaxSettings = {
        type: "GET",
        beforeSend: A,
        success: A,
        error: A,
        complete: A,
        context: null,
        global: !0,
        xhr: function() {
            return new window.XMLHttpRequest
        },
        accepts: {
            script: "text/javascript, application/javascript, application/x-javascript",
            json: "application/json",
            xml: "application/xml, text/xml",
            html: "text/html",
            text: "text/plain"
        },
        crossDomain: !1,
        timeout: 0,
        processData: !0,
        cache: !0
    };
    f.ajax = function(d) {
        var a = f.extend({}, d || {}),
            c = f.Deferred && f.Deferred();
        for (x in f.ajaxSettings) void 0 === a[x] && (a[x] = f.ajaxSettings[x]);
        n(a);
        a.crossDomain || (a.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(a.url) && RegExp.$2 != window.location.host);
        a.url || (a.url = window.location.toString());
        B(a);
        var e = a.dataType,
            h = /\?.+=\?/.test(a.url);
        h && (e = "jsonp");
        !1 !== a.cache && (d && !0 === d.cache || "script" != e && "jsonp" != e) || (a.url = G(a.url,
            "_=" + Date.now()));
        if ("jsonp" == e) return h || (a.url = G(a.url, a.jsonp ? a.jsonp + "=?" : !1 === a.jsonp ? "" : "callback=?")), f.ajaxJSONP(a, c);
        d = a.accepts[e];
        var k = {},
            h = function(a, c) {
                k[a.toLowerCase()] = [a, c]
            },
            l = /^([\w-]+:)\/\//.test(a.url) ? RegExp.$1 : window.location.protocol,
            m = a.xhr(),
            q = m.setRequestHeader,
            H;
        c && c.promise(m);
        a.crossDomain || h("X-Requested-With", "XMLHttpRequest");
        h("Accept", d || "*/*");
        if (d = a.mimeType || d) - 1 < d.indexOf(",") && (d = d.split(",", 2)[0]), m.overrideMimeType && m.overrideMimeType(d);
        (a.contentType || !1 !==
            a.contentType && a.data && "GET" != a.type.toUpperCase()) && h("Content-Type", a.contentType || "application/x-www-form-urlencoded");
        if (a.headers)
            for (u in a.headers) h(u, a.headers[u]);
        m.setRequestHeader = h;
        m.onreadystatechange = function() {
            if (4 == m.readyState) {
                m.onreadystatechange = A;
                clearTimeout(H);
                var d, h = !1;
                if (200 <= m.status && 300 > m.status || 304 == m.status || 0 == m.status && "file:" == l) {
                    e = e || D(a.mimeType || m.getResponseHeader("content-type"));
                    d = m.responseText;
                    try {
                        "script" == e ? (0, eval)(d) : "xml" == e ? d = m.responseXML : "json" ==
                            e && (d = g.test(d) ? null : f.parseJSON(d))
                    } catch (k) {
                        h = k
                    }
                    h ? t(h, "parsererror", m, a, c) : v(d, m, a, c)
                } else t(m.statusText || null, m.status ? "error" : "abort", m, a, c)
            }
        };
        if (!1 === p(m, a)) return m.abort(), t(null, "abort", m, a, c), m;
        if (a.xhrFields)
            for (u in a.xhrFields) m[u] = a.xhrFields[u];
        m.open(a.type, a.url, "async" in a ? a.async : !0, a.username, a.password);
        for (u in k) q.apply(m, k[u]);
        0 < a.timeout && (H = setTimeout(function() {
            m.onreadystatechange = A;
            m.abort();
            t(null, "timeout", m, a, c)
        }, a.timeout));
        m.send(a.data ? a.data : null);
        return m
    };
    f.get =
        function() {
            return f.ajax(C.apply(null, arguments))
        };
    f.post = function() {
        var d = C.apply(null, arguments);
        d.type = "POST";
        return f.ajax(d)
    };
    f.getJSON = function() {
        var d = C.apply(null, arguments);
        d.dataType = "json";
        return f.ajax(d)
    };
    f.fn.load = function(d, a, c) {
        if (!this.length) return this;
        var e = this,
            g = d.split(/\s/),
            h;
        d = C(d, a, c);
        var k = d.success;
        1 < g.length && (d.url = g[0], h = g[1]);
        d.success = function(a) {
            e.html(h ? f("<div>").html(a.replace(H, "")).find(h) : a);
            k && k.apply(e, arguments)
        };
        f.ajax(d);
        return this
    };
    var q = encodeURIComponent;
    f.param = function(d, a) {
        var c = [];
        c.add = function(a, c) {
            this.push(q(a) + "=" + q(c))
        };
        E(c, d, a);
        return c.join("&").replace(/%20/g, "+")
    }
})(Zepto);
(function(f) {
    f.fn.serializeArray = function() {
        var h = [],
            n;
        f([].slice.call(this.get(0).elements)).each(function() {
            n = f(this);
            var p = n.attr("type");
            "fieldset" != this.nodeName.toLowerCase() && !this.disabled && "submit" != p && "reset" != p && "button" != p && ("radio" != p && "checkbox" != p || this.checked) && h.push({
                name: n.attr("name"),
                value: n.val()
            })
        });
        return h
    };
    f.fn.serialize = function() {
        var f = [];
        this.serializeArray().forEach(function(n) {
            f.push(encodeURIComponent(n.name) + "=" + encodeURIComponent(n.value))
        });
        return f.join("&")
    };
    f.fn.submit = function(h) {
        h ? this.bind("submit", h) : this.length && (h = f.Event("submit"), this.eq(0).trigger(h), h.isDefaultPrevented() || this.get(0).submit());
        return this
    }
})(Zepto);
(function(f) {
    "__proto__" in {} || f.extend(f.zepto, {
        Z: function(h, p) {
            h = h || [];
            f.extend(h, f.fn);
            h.selector = p || "";
            h.__Z = !0;
            return h
        },
        isZ: function(h) {
            return "array" === f.type(h) && "__Z" in h
        }
    });
    try {
        getComputedStyle(void 0)
    } catch (n) {
        var h = getComputedStyle;
        window.getComputedStyle = function(f) {
            try {
                return h(f)
            } catch (n) {
                return null
            }
        }
    }
})(Zepto);
(function(f, h) {
    function n(f) {
        return v ? v + f : f.toLowerCase()
    }
    var p = "",
        v, t = document.createElement("div"),
        F = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
        A, D, G, B, C, E, z, w, x, u = {};
    f.each({
        Webkit: "webkit",
        Moz: "",
        O: "o"
    }, function(f, l) {
        if (t.style[f + "TransitionProperty"] !== h) return p = "-" + f.toLowerCase() + "-", v = l, !1
    });
    A = p + "transform";
    u[D = p + "transition-property"] = u[G = p + "transition-duration"] = u[C = p + "transition-delay"] = u[B = p + "transition-timing-function"] = u[E = p + "animation-name"] = u[z =
        p + "animation-duration"] = u[x = p + "animation-delay"] = u[w = p + "animation-timing-function"] = "";
    f.fx = {
        off: v === h && t.style.transitionProperty === h,
        speeds: {
            _default: 400,
            fast: 200,
            slow: 600
        },
        cssPrefix: p,
        transitionEnd: n("TransitionEnd"),
        animationEnd: n("AnimationEnd")
    };
    f.fn.animate = function(n, l, k, g, q) {
        f.isFunction(l) && (g = l, l = k = h);
        f.isFunction(k) && (g = k, k = h);
        f.isPlainObject(l) && (k = l.easing, g = l.complete, q = l.delay, l = l.duration);
        l && (l = ("number" == typeof l ? l : f.fx.speeds[l] || f.fx.speeds._default) / 1E3);
        q && (q = parseFloat(q) /
            1E3);
        return this.anim(n, l, k, g, q)
    };
    f.fn.anim = function(n, l, k, g, q) {
        var d, a = {},
            c, e = "",
            p = this,
            t, v = f.fx.transitionEnd,
            m = !1;
        l === h && (l = f.fx.speeds._default / 1E3);
        q === h && (q = 0);
        f.fx.off && (l = 0);
        if ("string" == typeof n) a[E] = n, a[z] = l + "s", a[x] = q + "s", a[w] = k || "linear", v = f.fx.animationEnd;
        else {
            c = [];
            for (d in n) F.test(d) ? e += d + "(" + n[d] + ") " : (a[d] = n[d], c.push(d.replace(/([a-z])([A-Z])/, "$1-$2").toLowerCase()));
            e && (a[A] = e, c.push(A));
            0 < l && "object" === typeof n && (a[D] = c.join(", "), a[G] = l + "s", a[C] = q + "s", a[B] = k || "linear")
        }
        t = function(a) {
            if ("undefined" !==
                typeof a) {
                if (a.target !== a.currentTarget) return;
                f(a.target).unbind(v, t)
            } else f(this).unbind(v, t);
            m = !0;
            f(this).css(u);
            g && g.call(this)
        };
        0 < l && (this.bind(v, t), setTimeout(function() {
            m || t.call(p)
        }, 1E3 * (l + q) + 25));
        this.size() && this.get(0).clientLeft;
        this.css(a);
        0 >= l && setTimeout(function() {
            p.each(function() {
                t.call(this)
            })
        }, 0);
        return this
    };
    t = null
})(Zepto);
